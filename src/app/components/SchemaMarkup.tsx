import Script from "next/script";

export default function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syaid Andhika",
    url: "https://syaidandhika.my.id",
    jobTitle: "Technical Support UBSI Kampus Solo",
    description:
      "Lulusan S.Kom yang bekerja sebagai Technical Support di UBSI Kampus Solo dan terus belajar pengembangan web dan UI/UX.",
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
