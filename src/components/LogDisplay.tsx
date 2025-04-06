"use client"; // 클라이언트 전용 컴포넌트

import { useEffect } from "react";
import { useLogStore } from "@/store/logStore";

const LogDisplay = () => {
  const { logs, addLog } = useLogStore((state) => state);

  return (
    <div>
      <button onClick={() => addLog("info", "User successfully logged in")}>
        Add Log
      </button>{" "}
      {/* 로그 추가 버튼 */}
      <div>
        <h2>Logs</h2>
        {logs.map((log) => (
          <p key={log.timestamp}>
            <div>{log.level}</div>
            <div>{log.message}</div>
            <div>{log.timestamp}</div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LogDisplay;
