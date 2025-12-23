"use client";

import { useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef<Point>({ x: 0, y: 0 });
  const ring = useRef<Point>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const hasMoved = useRef(false);
  const visibleRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(any-hover: hover) and (any-pointer: fine)"
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateEnabled = () => {
      setEnabled(finePointer.matches && !reduceMotion.matches);
    };

    updateEnabled();
    if (finePointer.addEventListener) {
      finePointer.addEventListener("change", updateEnabled);
      reduceMotion.addEventListener("change", updateEnabled);
    } else {
      finePointer.addListener(updateEnabled);
      reduceMotion.addListener(updateEnabled);
    }

    return () => {
      if (finePointer.removeEventListener) {
        finePointer.removeEventListener("change", updateEnabled);
        reduceMotion.removeEventListener("change", updateEnabled);
      } else {
        finePointer.removeListener(updateEnabled);
        reduceMotion.removeListener(updateEnabled);
      }
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-custom-cursor", enabled);
    document.documentElement.classList.toggle("has-custom-cursor", enabled);
    if (!enabled) {
      setVisible(false);
      visibleRef.current = false;
      hasMoved.current = false;
    }
    return () => {
      document.body.classList.remove("has-custom-cursor");
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const setVisibility = (next: boolean) => {
      if (visibleRef.current === next) return;
      visibleRef.current = next;
      setVisible(next);
    };

    const handleMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
      if (!hasMoved.current) {
        ring.current = { x: event.clientX, y: event.clientY };
        hasMoved.current = true;
      }
      setVisibility(true);
    };

    const handleOut = (event: MouseEvent) => {
      if (!event.relatedTarget && !event.toElement) {
        setVisibility(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleOut);
      setVisibility(false);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const trailSmooth = 0.08;

    const animate = () => {
      ring.current = {
        x: ring.current.x + (mouse.current.x - ring.current.x) * trailSmooth,
        y: ring.current.y + (mouse.current.y - ring.current.y) * trailSmooth,
      };

      if (dotRef.current) {
        dotRef.current.style.setProperty(
          "--cursor-x",
          `${mouse.current.x}px`
        );
        dotRef.current.style.setProperty(
          "--cursor-y",
          `${mouse.current.y}px`
        );
      }

      if (ringRef.current) {
        ringRef.current.style.setProperty(
          "--cursor-x",
          `${ring.current.x}px`
        );
        ringRef.current.style.setProperty(
          "--cursor-y",
          `${ring.current.y}px`
        );
      }

      if (trailRef.current) {
        const deltaX = mouse.current.x - ring.current.x;
        const deltaY = mouse.current.y - ring.current.y;
        const distance = Math.min(Math.hypot(deltaX, deltaY) * 1.2, 60);
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        trailRef.current.style.setProperty(
          "--trail-x",
          `${ring.current.x}px`
        );
        trailRef.current.style.setProperty(
          "--trail-y",
          `${ring.current.y}px`
        );
        trailRef.current.style.setProperty(
          "--trail-length",
          `${distance}px`
        );
        trailRef.current.style.setProperty(
          "--trail-angle",
          `${angle}deg`
        );
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="custom-cursor" data-visible={visible ? "true" : "false"}>
      <div ref={trailRef} className="custom-cursor__trail" />
      <div ref={ringRef} className="custom-cursor__ring" />
      <div ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
}
