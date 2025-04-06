// 게시판 관련 제약 조건만 따로 정리
import { z } from "zod";

export const titleSchema = z
  .string()
  .min(1, "제목을 입력해주세요")
  .max(50, "제목은 50자 이내로 입력해주세요");

export const contentSchema = z
  .string()
  .min(10, "내용은 최소 10자 이상 입력해주세요")
  .max(1000, "내용은 최대 1000자까지 입력할 수 있습니다");

export const createBoardSchema = z.object({
  title: titleSchema,
  content: contentSchema,
});

export type CreateBoardSchema = z.infer<typeof createBoardSchema>;
