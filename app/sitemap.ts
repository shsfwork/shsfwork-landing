import { allProducts } from "content-collections";
import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const domain = headersList.get("host") as string;
  const protocol = "https";

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
    ...allProducts.map((p) => ({
      url: `${protocol}://${domain}/${p.url}`,
      lastModified: p.lastModification,
    })),
  ];
}
