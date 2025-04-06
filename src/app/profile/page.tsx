"use client";

import { useUserStore } from "@/store/userStore";

export default function ProfilePage() {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <div className="p-4">사용자 정보가 없습니다.</div>;
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-2">프로필</h1>
      <p>이름: {user.name}</p>
      <p>이메일: {user.email}</p>
      <p>역할: {user.role}</p>
    </main>
  );
}
