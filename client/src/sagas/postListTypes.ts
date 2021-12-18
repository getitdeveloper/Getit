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

export interface IMyPostListData {
  user: number;
  category: string;
  page: string;
}

export interface IMyPostListAction {
  type: string;
  data: IMyPostListData;
}

export interface ILikedPostListData {
  user: number;
  category: string;
  page: string;
}

export interface ILikedPostListAction {
  type: string;
  data: ILikedPostListData;
}
