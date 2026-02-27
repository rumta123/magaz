import axios from "axios";

// Default to the Nest backend port you exposed (use NEXT_PUBLIC_BACKEND_URL to override)
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3333";

const backend = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default backend;
