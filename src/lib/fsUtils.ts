import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "boards.json");

export async function readBoardsFile() {
  const data = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(data);
}

export async function writeBoardsFile(data: any) {
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
}
