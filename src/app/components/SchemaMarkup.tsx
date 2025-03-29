// components/SchemaMarkup.tsx
import Script from "next/script";

export default function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syaid Andhika",
    url: "https://syaidandhika.my.id",
    jobTitle: "Information Systems Student",
    description:
      "Information Systems student passionate about technology and innovation",
  };

  return (
    <Script
      id="schema-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
