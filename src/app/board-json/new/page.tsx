"use client";

import { useRouter } from "next/navigation";
import { API_BOARD_JSON } from "@/constants/api";
import { useGenericMutation } from "@/hooks/useGenericMutation";
import { CreateBoardPayload } from "@/types/board.types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createBoardSchema,
  CreateBoardSchema,
} from "@/validations/board.schema";
// import { z } from "zod";

// const schema = z.object({
//   title: z
//     .string()
//     .min(1, "제목을 입력해주세요")
//     .max(50, "제목은 50자 이내로 입력해주세요"),

//   content: z
//     .string()
//     .min(10, "내용은 최소 10자 이상 입력해주세요")
//     .max(1000, "내용은 최대 1000자까지 입력할 수 있습니다"),
// });

export default function NewBoardPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBoardSchema>({
    resolver: zodResolver(createBoardSchema),
  });

  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [errors, setErrors] = useState<{ title?: string; content?: string }>(
  //   {}
  // );

  const { mutate, isPending } = useGenericMutation<void, CreateBoardPayload>(
    API_BOARD_JSON.createBoard.method,
    API_BOARD_JSON.createBoard.url,
    {
      onSuccess: () => {
        router.push("/board-json");
      },
    }
  );

  const onSubmit = (data: CreateBoardSchema) => {
    mutate(data);
  };

  // const handleSubmit = () => {
  //   const result = schema.safeParse({ title, content });

  //   if (!result.success) {
  //     const fieldErrors = result.error.flatten().fieldErrors;
  //     setErrors({
  //       title: fieldErrors.title?.[0],
  //       content: fieldErrors.content?.[0],
  //     });
  //     return;
  //   }

  //   setErrors({});
  //   mutate({ title, content });
  // };

  return (
    <div className="space-y-4 max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold">글쓰기</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="w-full border p-2 rounded"
            type="text"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
            {...register("title")}
          />
          {errors.title && (
            <p style={{ color: "red" }}>{errors.title.message}</p>
          )}
        </div>

        <div>
          <textarea
            className="w-full border p-2 rounded h-40"
            // value={content}
            // onChange={(e) => setContent(e.target.value)}
            placeholder="내용"
            {...register("content")}
          />
          {errors.content && (
            <p style={{ color: "red" }}>{errors.content.message}</p>
          )}
        </div>

        <button type="submit" disabled={isPending}>
          등록
        </button>
      </form>
    </div>
  );
}
