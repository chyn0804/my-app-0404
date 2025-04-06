"use client";

import { useEffect } from "react";
import { User, useUserStore } from "@/store/userStore";
import axios from "axios";
import Link from "next/link";
import { useGenericQuery } from "@/hooks/apiHooks";
import { API_USER } from "@/constants/api";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

export default function HomePage() {
  const setUser = useUserStore((state) => state.setUser);

  const {
    data: user,
    isLoading,
    isError,
  } = useGenericQuery<User>(API_USER.user.queryKey, API_USER.user.url);

  useEffect(() => {
    if (user) {
      setUser(user); // 단건 저장
    }
  }, [user, setUser]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">홈페이지</h1>
      <p>사용자 정보를 로딩 중입니다...</p>
      <Link href="/profile" className="text-blue-500 underline mt-4 block">
        프로필 페이지로 이동
      </Link>
    </main>
  );
}
