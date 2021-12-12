import { IPost } from '@types';

export interface IPostItem {
  content: IPost;
  boardType?: string;
  index?: number;
  length?: number;
}
