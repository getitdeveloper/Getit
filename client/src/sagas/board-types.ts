import { IBoard, IPost } from '../types';

export interface ResponseFreeBoard {
  data: IBoard;
}

export interface ResponseFreePost {
  data: IPost;
}

export interface FreePostData {
  title: string;
  category: string;
  content: string;
  user: number;
}
