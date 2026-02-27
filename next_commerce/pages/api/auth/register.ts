import type { NextApiRequest, NextApiResponse } from "next";
import backend from "../../../lib/backend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") return res.status(405).end();

    const resp = await backend.post("/auth/register", req.body);
    return res.status(resp.status || 201).json(resp.data);
  } catch (err: any) {
    console.error(err?.message || err);
    const status = err?.response?.status || 500;
    return res.status(status).json({ error: err?.response?.data || err?.message || String(err) });
  }
}
