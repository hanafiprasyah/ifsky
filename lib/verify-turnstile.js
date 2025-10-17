export async function verifyTurnstile(token, ip) {
  if (process.env.TURNSTILE_ENABLED === "false") return true; // temporary BYPASS
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return false;
  const resp = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: ip || "",
      }),
      cache: "no-store",
    }
  );
  const data = await resp.json();
  return !!data.success;
}
