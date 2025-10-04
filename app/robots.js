export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://ifsky.id/sitemap.xml",
    host: "https://ifsky.id",
  };
}
