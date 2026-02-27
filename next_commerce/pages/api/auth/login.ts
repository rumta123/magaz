import type { NextApiRequest, NextApiResponse } from "next";
import backend from "../../../lib/backend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") return res.status(405).end();

    const resp = await backend.post("/auth/login", req.body);
    const data = resp.data || {};

    // If backend set a Set-Cookie header (HttpOnly token), forward it to the browser
    const backendSetCookie = resp.headers && (resp.headers['set-cookie'] || resp.headers['Set-Cookie']);
    if (backendSetCookie) {
      // Normalize cookies from backend before forwarding to browser.
      // Turn into array
      const cookies = Array.isArray(backendSetCookie) ? backendSetCookie : [String(backendSetCookie)];
      const normalized = cookies.map((c) => {
        // Remove Domain=... so cookie is set for our proxy origin
        let out = c.replace(/;?\s*Domain=[^;]+/i, "");
        // Remove Secure when running on HTTP localhost
        out = out.replace(/;?\s*Secure/i, "");
        // Ensure Path=/ present
        if (!/;\s*Path=/i.test(out)) out += "; Path=/";
        // Ensure HttpOnly present
        if (!/;\s*HttpOnly/i.test(out)) out += "; HttpOnly";
        // Ensure SameSite set (default to Lax)
        if (!/;\s*SameSite=/i.test(out)) out += "; SameSite=Lax";
        return out;
      });
      res.setHeader('Set-Cookie', normalized as any);
    } else {
      // fallback: if backend returned token in body, set cookie here
      const token = data?.accessToken || data?.token || data?.access_token || null;
      if (token) {
        const maxAge = 7 * 24 * 60 * 60; // 7 days
        res.setHeader(
          "Set-Cookie",
          `token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax`
        );
      }
    }

    return res.status(resp.status || 200).json(data);
  } catch (err: any) {
    console.error(err?.message || err);
    const status = err?.response?.status || 500;
    return res.status(status).json({ error: err?.response?.data || err?.message || String(err) });
  }
}
