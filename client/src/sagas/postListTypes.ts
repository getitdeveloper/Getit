import { RouteComponentProps } from 'react-router-dom';
import { ICommonPostList, IPost } from '@types';

export interface ResponseFreeBoard {
  data: ICommonPostList;
}

export interface ResponseFreePost {
  data: IPost;
}

export interface ICommonPostListData {
  page?: number;
  category: string;
  filterStatus?: Array<{ text: string; value: string; checked: boolean }>;
}

export interface ICommonPostListAction {
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

export interface IRecruitPostListData {
  page?: number;
  filterStatus?: Array<{ text: string; value: string; checked: boolean }>;
}
export interface IRecruitPostList {
  type: string;
  data: IRecruitPostListData;
}

export interface ISearchPostList {
  type: string;
  data: string;
  history: RouteComponentProps['history'];
}
