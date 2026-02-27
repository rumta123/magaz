import type { NextApiRequest, NextApiResponse } from "next";
import backend from "../../../lib/backend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.headers.cookie?.match(/(?:^|; )token=([^;]+)/)?.[1];
    const headers: any = { cookie: req.headers.cookie || "" };
    if (token) headers.Authorization = `Bearer ${token}`;

    if (req.method === "POST") {
      const resp = await backend.post("/addresses", req.body, { headers });
      return res.status(resp.status || 201).json(resp.data);
    }

    return res.status(405).end();
  } catch (err: any) {
    console.error(err?.message || err);
    const status = err?.response?.status || 500;
    return res.status(status).json({ error: err?.response?.data || err?.message || String(err) });
  }
}
