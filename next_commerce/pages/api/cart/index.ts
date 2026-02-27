import type { NextApiRequest, NextApiResponse } from "next";
import backend from "../../../lib/backend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const method = req.method;
    const token = req.headers.cookie?.match(/(?:^|; )token=([^;]+)/)?.[1];
    const headers: any = { cookie: req.headers.cookie || "" };
    if (token) headers.Authorization = `Bearer ${token}`;

    if (method === "GET") {
      const resp = await backend.get("/cart", { params: req.query, headers });
      return res.status(200).json(resp.data);
    }
    if (method === "POST") {
      const resp = await backend.post("/cart", req.body, { headers });
      return res.status(200).json(resp.data);
    }
    if (method === "PATCH") {
      const resp = await backend.patch("/cart", req.body, { headers });
      return res.status(200).json(resp.data);
    }
    if (method === "DELETE") {
      const resp = await backend.delete("/cart", { data: req.body, headers });
      return res.status(200).json(resp.data);
    }
    return res.status(405).end();
  } catch (err: any) {
    console.error(err?.message || err);
    return res.status(500).json({ error: err?.message || String(err) });
  }
}
