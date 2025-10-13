export default async function sitemap() {
  const routes = ["", "/about", "/products"].map((p) => ({
    url: `https://ifsky.id${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
  return routes;
}
