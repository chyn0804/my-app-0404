import { writeFile, mkdir, readFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const filename = `logger_${yyyy}${mm}${dd}.json`;

    const dirPath = path.join(process.cwd(), "public", "data");
    const filePath = path.join(dirPath, filename);

    await mkdir(dirPath, { recursive: true });

    let logs: any[] = [];
    try {
      const file = await readFile(filePath, "utf-8");
      logs = JSON.parse(file);
    } catch (err) {
      // 파일 없으면 무시하고 새로 생성
    }

    logs.push({
      ...body,
      receivedAt: now.toISOString(),
    });

    await writeFile(filePath, JSON.stringify(logs, null, 2), "utf-8");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    console.error("[LOG ERROR]", e);
    return new Response(JSON.stringify({ success: false, error: String(e) }), {
      status: 500,
    });
  }
}
