import type { NextApiRequest, NextApiResponse } from "next";
import backend from "../../../lib/backend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const token = req.headers.cookie?.match(/(?:^|; )token=([^;]+)/)?.[1];
      const headers: any = { cookie: req.headers.cookie || "" };
      if (token) headers.Authorization = `Bearer ${token}`;
      const page = Number(req.query.page ?? 1);
      const limit = Number(req.query.limit ?? 20);
      const categoryId = Number(req.query.categoryId ?? 0);
      const minPrice = Number(req.query.minPrice ?? 0);
      const maxPrice = Number(req.query.maxPrice ?? 999999999);
      const resp = await backend.get("/products", {
        headers,
        // Backend currently uses ParseIntPipe for optional filters and returns 400
        // when they are absent, so we always send numeric defaults.
        params: { ...req.query, page, limit, categoryId, minPrice, maxPrice },
      });
      return res.status(200).json(resp.data);
    }
    return res.status(405).end();
  } catch (err: any) {
    console.error(err?.message || err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
}
