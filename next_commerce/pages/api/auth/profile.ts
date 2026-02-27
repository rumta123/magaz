import type { NextApiRequest, NextApiResponse } from "next";
import backend from "../../../lib/backend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") return res.status(405).end();

    const token = req.headers.cookie?.match(/(?:^|; )token=([^;]+)/)?.[1];
    const headers: any = { cookie: req.headers.cookie || "" };
    if (token) headers.Authorization = `Bearer ${token}`;
    const resp = await backend.get("/auth/profile", { headers });
    return res.status(200).json(resp.data);
  } catch (err: any) {
    console.error(err?.message || err);
    const status = err?.response?.status || 500;
    return res.status(status).json({ error: err?.response?.data || err?.message || String(err) });
  }
}
