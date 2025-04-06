"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useGenericQuery, useGenericMutation } from "@/hooks/apiHooks";
import { API_BOARD } from "@/constants/api";
import { BoardItem } from "@/types/board.types";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function BoardViewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  // 잘못된 접근 방지
  useEffect(() => {
    if (!id) {
      alert("잘못된 접근입니다.");
      router.replace("/board/list");
    }
  }, [id, router]);

  // 게시글 상세 조회
  const { data, isLoading } = useGenericQuery<BoardItem>(
    API_BOARD.boardDetail.queryKey(id!),
    API_BOARD.boardDetail.url(id!)
  );

  // 게시글 삭제
  const deleteMutation = useGenericMutation<void, void>(
    API_BOARD.deleteBoard.method,
    API_BOARD.deleteBoard.url(id!)
  );

  const handleDelete = () => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    deleteMutation.mutate(undefined, {
      onSuccess: () => {
        alert("삭제되었습니다.");
        router.push("/board");
      },
      onError: () => {
        alert("삭제 중 오류가 발생했습니다.");
      },
    });
  };

  if (isLoading || !data) return <div>로딩 중...</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="mb-8 whitespace-pre-wrap">{data.content}</p>

      <div className="flex gap-2 justify-end">
        <Button
          variant="outline"
          onClick={() => router.push(`/board/edit?id=${id}`)}
        >
          수정
        </Button>
        <Button variant="destructive" onClick={handleDelete}>
          삭제
        </Button>
        <Button variant="outline" onClick={() => router.push(`/board`)}>
          목록
        </Button>
      </div>
    </div>
  );
}
