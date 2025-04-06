// src/constants/boardStatus.ts
export enum BoardStatus {
  Draft = "draft",
  Published = "published",
  Hidden = "hidden",
}

export const BOARD_STATUS_OPTIONS = [
  { label: "작성중", value: BoardStatus.Draft },
  { label: "게시됨", value: BoardStatus.Published },
  { label: "숨김", value: BoardStatus.Hidden },
];
