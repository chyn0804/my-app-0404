"use client";

import { useEffect } from "react";
import { User, useUserStore } from "@/store/userStore";
import axios from "axios";
import Link from "next/link";
import { useGenericQuery } from "@/hooks/apiHooks";
import { API_USER } from "@/constants/api";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { Card, CardContent } from "@/components/ui/card";
import { RecursiveMenu, MenuItem } from "@/app/RecursiveMenu";

const menuItems: MenuItem[] = [
  {
    title: "📊 대시보드",
    subItems: [
      {
        title: "로그 테스트",
        href: "/exam/log-event",
        subItems: [
          { title: "통계", href: "/dashboard/overview/stats" },
          { title: "히스토리", href: "/dashboard/overview/history" },
        ],
      },
      {
        title: "분석",
        href: "/dashboard/analytics",
      },
    ],
  },
  {
    title: "⚙️ 설정",
    subItems: [
      {
        title: "일반 설정",
        href: "/settings/general",
      },
      {
        title: "보안 설정",
        href: "/settings/security",
      },
    ],
  },
  {
    title: "👤 프로필",
    href: "/profile",
  },
];

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
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">메인 메뉴</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
          {menuItems.map((item) => (
            <Card
              key={item.title}
              className="hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-4">
                <RecursiveMenu item={item} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
