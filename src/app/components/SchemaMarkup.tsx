import Script from "next/script";

export default function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syaid Andhika",
    url: "https://syaidandhika.my.id",
    jobTitle: "Information Systems Student & IT Support",
    description:
      "Information Systems student and IT support professional passionate about technology and innovation",
    sameAs: [
      "https://www.linkedin.com/in/syaid-andhika-24831b2bb/",
      "https://github.com/l0c4lxid",
    ],
  };

  return (
    <Script
      id="schema-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
