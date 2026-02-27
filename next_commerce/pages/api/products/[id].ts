import type { NextApiRequest, NextApiResponse } from "next";
import backend from "../../../lib/backend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    if (req.method === "GET") {
      const token = req.headers.cookie?.match(/(?:^|; )token=([^;]+)/)?.[1];
      const headers: any = { cookie: req.headers.cookie || "" };
      if (token) headers.Authorization = `Bearer ${token}`;

      const raw = Array.isArray(id) ? id[0] : id;
      const key = String(raw || "").trim();
      if (!key) return res.status(400).json({ error: "id or slug is required" });

      const slugIdMatch = key.match(/-(\d+)$/);
      const extractedId = slugIdMatch?.[1];
      const isNumericId = /^\d+$/.test(key);
      const endpoint = extractedId
        ? `/products/${extractedId}`
        : isNumericId
          ? `/products/${key}`
          : `/products/slug/${encodeURIComponent(key)}`;

      const resp = await backend.get(endpoint, { headers });
      return res.status(200).json(resp.data);
    }
    return res.status(405).end();
  } catch (err: any) {
    console.error(err?.message || err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
}
