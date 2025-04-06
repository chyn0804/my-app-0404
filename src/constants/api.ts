// /constants/api.ts

export const API_DEFINITIONS = {
  cardA: {
    queryKey: ["cardAItems"],
    url: "/api/cardA",
  },
  cardB: {
    queryKey: ["cardBItems"],
    url: "/api/cardB",
  },
  // 필요한 경우 더 추가
};

export const API_BOARD = {
  boards: {
    queryKey: ["boards"],
    url: "/api/boards",
  },
  boardDetail: {
    queryKey: (id: string) => ["board", id],
    url: (id: string) => `/api/boards?id=${id}`,
  },
  createBoard: {
    method: "post",
    url: "/api/boards",
  },
  updateBoard: {
    method: "put", // 함수 ❌
    url: (id: string) => `/api/boards?id=${id}`,
  },
  deleteBoard: {
    method: "delete", // 함수 ❌
    url: (id: string) => `/api/boards?id=${id}`,
  },
} as const;

export const API_BOARD_JSON = {
  boards: {
    queryKey: ["boards-json"],
    url: "/api/boards-json",
  },
  boardDetail: {
    queryKey: (id: string) => ["board-json", id],
    url: (id: string) => `/api/boards-json?id=${id}`,
  },
  createBoard: {
    method: "post",
    url: "/api/boards-json",
  },
  updateBoard: {
    method: "put", // 함수 ❌
    url: (id: string) => `/api/boards-json?id=${id}`,
  },
  deleteBoard: {
    method: "delete", // 함수 ❌
    url: (id: string) => `/api/boards-json?id=${id}`,
  },
} as const;

// api-definitions.ts
export const API_USER = {
  user: {
    queryKey: ["user"],
    url: "/api/user",
  },
} as const;
