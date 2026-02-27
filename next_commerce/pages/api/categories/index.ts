import type { NextApiRequest, NextApiResponse } from "next";
import backend from "../../../lib/backend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      // backend has /categories/all
      const token = req.headers.cookie?.match(/(?:^|; )token=([^;]+)/)?.[1];
      const headers: any = { cookie: req.headers.cookie || "" };
      if (token) headers.Authorization = `Bearer ${token}`;
      const resp = await backend.get("/categories/all", { headers });
      return res.status(200).json(resp.data);
    }
    return res.status(405).end();
  } catch (err: any) {
    console.error(err?.message || err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
}
