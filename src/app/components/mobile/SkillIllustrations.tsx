"use client";

import type { SVGProps } from "react";

export function FrontendIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="8" y="12" width="48" height="32" rx="6" />
      <path d="M20 28l-6 6 6 6" />
      <path d="M44 28l6 6-6 6" />
      <path d="M26 40l6-16" />
      <path d="M18 48h28" />
    </svg>
  );
}

export function BackendIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="12" y="10" width="40" height="16" rx="4" />
      <rect x="12" y="28" width="40" height="16" rx="4" />
      <rect x="12" y="46" width="40" height="8" rx="4" />
      <path d="M18 18h6" />
      <path d="M18 36h6" />
      <circle cx="46" cy="18" r="2" />
      <circle cx="46" cy="36" r="2" />
    </svg>
  );
}

export function CloudIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 42a10 10 0 0 1 9-14 12 12 0 0 1 23 3 8 8 0 0 1-2 16H20a8 8 0 0 1-2-5z" />
      <path d="M22 50l-6 6" />
      <path d="M32 50v8" />
      <path d="M42 50l6 6" />
    </svg>
  );
}

export function StrengthIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="18" y="18" width="28" height="28" rx="6" />
      <path d="M26 26h12v12H26z" />
      <path d="M32 6v8" />
      <path d="M32 50v8" />
      <path d="M6 32h8" />
      <path d="M50 32h8" />
      <path d="M12 12l6 6" />
      <path d="M46 46l6 6" />
      <path d="M12 52l6-6" />
      <path d="M46 18l6-6" />
    </svg>
  );
}
