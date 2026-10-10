import { client } from "../config/client";

/** JSON-LD structured data for a local auto-repair business — helps search engines
 * surface opening hours, address and phone directly in results. */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: client.meta.legalName,
    description: client.meta.description,
    url: client.meta.url,
    telephone: client.contact.phone,
    email: client.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: client.contact.addressLine1,
      addressLocality: client.contact.addressLine2,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: client.contact.geo.lat,
      longitude: client.contact.geo.lng,
    },
    openingHoursSpecification: client.contact.hours
      .filter((row) => !/ferm/i.test(row.hours))
      .map((row) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: row.days,
        opens: row.hours.split("–")[0]?.trim(),
        closes: row.hours.split("–")[1]?.trim(),
      })),
  };
}
