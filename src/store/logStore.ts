// src/store/logStore.ts

import { create } from "zustand";
import { devtools } from "zustand/middleware"; // devtools 미들웨어 추가

// Define the structure of a log
interface Log {
  timestamp: string;
  level: string;
  message: string;
}

// LogStore 타입 정의
interface LogStore {
  logs: Log[];
  addLog: (level: string, message: string) => void;
}

export const useLogStore = create<LogStore>((set) => ({
  logs: [],
  addLog: (level, message) =>
    set((state) => {
      const newLog: Log = {
        timestamp: new Date().toISOString(), // Set the current timestamp
        level, // Log level (info, error, etc.)
        message, // Log message
      };

      const updatedLogs = [...state.logs, newLog];

      // 5개 로그가 쌓이면 전송 후 초기화
      if (updatedLogs.length >= 5) {
        sendLogs(updatedLogs); // 로그 전송
        set({ logs: [] }); // 로그 초기화
      } else {
        set({ logs: updatedLogs });
      }

      return {};
    }),
})); // <-- Closing the function

// 로그 전송 함수 (API 호출)
const sendLogs = async (logs: Log[]) => {
  try {
    const response = await fetch("/api/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ logs }),
    });

    if (!response.ok) {
      throw new Error("Failed to send logs");
    }

    console.log("Logs sent successfully:", logs);
  } catch (error) {
    console.error("Error sending logs:", error);
  }
};
