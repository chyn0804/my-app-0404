export interface BoardItem {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateBoardPayload {
  title: string;
  content: string;
}

export interface UpdateBoardPayload {
  title?: string;
  content?: string;
}
