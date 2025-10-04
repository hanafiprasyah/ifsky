export default async function sitemap() {
  // Tambahkan route dinamis bila ada (mis. produk) — contoh statik dulu
  const routes = ["", "/about", "/products"].map((p) => ({
    url: `https://ifsky.id${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
  return routes;
}
