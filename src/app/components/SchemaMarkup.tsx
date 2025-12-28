import Script from "next/script";

export default function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syaid Andhika",
    alternateName: ["Syaid A.", "Andhika"],
    url: "https://syaidandhika.my.id",
    image: "https://syaidandhika.my.id/profile.jpg",
    jobTitle: "Technical Support; Web Developer; UI/UX",
    description:
      "Technical Support UBSI Solo fokus Web Development dan UI/UX, membangun antarmuka cepat dan mudah digunakan.",
    email: "mailto:syaidxandhika@gmail.com",
    knowsAbout: [
      "Frontend",
      "Backend",
      "React",
      "Next.js",
      "UI/UX",
      "REST APIs",
      "Database Design",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Bina Sarana Informatika",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Solo",
      addressCountry: "ID",
    },
    sameAs: [
      "https://www.linkedin.com/in/syaid-andhika-24831b2bb/",
      "https://github.com/l0c4lxid",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://syaidandhika.my.id",
    name: "Syaid Andhika - Web Developer & UI/UX | Portofolio",
    inLanguage: "id-ID",
  };

  return (
    <>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
