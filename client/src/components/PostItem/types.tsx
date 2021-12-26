import { IPost, IRecruitPost } from '@types';

export interface IRecruitPostItem {
  content: any;
  boardType?: string;
  index?: number;
  length?: number;
}
export interface IPostItem {
  content: IPost;
  boardType?: string;
  index?: number;
  length?: number;
}
