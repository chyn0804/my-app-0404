// src/app/api/logs/route.ts

import fs from "fs";
import path from "path";

const LOG_FILE_PATH = path.resolve("data", "logs.json");

// Log format definition
interface Log {
  timestamp: string;
  level: string;
  message: string;
}

// POST 요청 처리 - 클라이언트에서 로그를 전송받고, 파일에 저장
export async function POST(req: Request) {
  const { logs } = await req.json();

  try {
    // logs.json 파일에 로그 기록
    const currentLogs = fs.existsSync(LOG_FILE_PATH)
      ? JSON.parse(fs.readFileSync(LOG_FILE_PATH, "utf-8"))
      : [];

    // 새로운 로그 추가 (형식에 맞는 로그만 추가)
    const formattedLogs: Log[] = logs.map((log: any) => ({
      timestamp: new Date().toISOString(),
      level: log.level || "info", // 기본 로그 레벨은 info
      message: log.message || "",
    }));

    const updatedLogs = [...currentLogs, ...formattedLogs];

    // logs.json 파일에 업데이트된 로그 기록
    fs.writeFileSync(
      LOG_FILE_PATH,
      JSON.stringify(updatedLogs, null, 2),
      "utf-8"
    );

    return new Response("Logs saved successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to save logs", { status: 500 });
  }
}

// GET 요청 처리 - logs.json 파일을 반환 (필요 시)
export async function GET() {
  try {
    const logs = fs.readFileSync(LOG_FILE_PATH, "utf-8");
    return new Response(logs, { status: 200 });
  } catch (error) {
    return new Response("Failed to read logs", { status: 500 });
  }
}
