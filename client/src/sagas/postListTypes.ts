import { IBoard, IPost } from '../types';

export interface ResponseFreeBoard {
  data: IBoard;
}

export interface ResponseFreePost {
  data: IPost;
}

export interface BoardData {
  page: number;
  category: string;
}
