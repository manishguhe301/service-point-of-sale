import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "utils", "data.json");

  const jsonData = await fs.readFile(filePath, "utf-8");

  const dishes = JSON.parse(jsonData);

  return new Response(JSON.stringify(dishes), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
