"use client";
// src/logs/app.tsx
import React from "react";
import LogDisplay from "@/components/LogDisplay";

export default function LogsPage() {
  return (
    <div>
      <h1>Event Logger</h1>
      <LogDisplay />
    </div>
  );
}
