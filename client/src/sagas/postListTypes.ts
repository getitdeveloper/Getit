import { IBoard, IPost } from '../types';

export interface ResponseFreeBoard {
  data: IBoard;
}

export interface ResponseFreePost {
  data: IPost;
}

export interface ICommonPostListData {
  page: number;
  category: string;
}

export interface ICommonPostList {
  type: string;
  data: ICommonPostListData;
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

export interface ILikedPostList {
  type: string;
  data: ILikedPostListData;
}

export interface ITeamProfileListData {
  userId: number;
}
export interface ITeamProfileList {
  type: string;
  data: ITeamProfileListData;
}

export interface IRecruitPostList {
  type: string;
  data: number;
}
