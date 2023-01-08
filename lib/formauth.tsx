import axios from "axios";

export default async function handle(mode: string, data: {}) {
  try {
    await axios.post("/api/auth", {
      mode,
      data,
    });
  } catch (error) {}
}
