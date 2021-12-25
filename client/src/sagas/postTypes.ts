import { RouteComponentProps } from 'react-router-dom';

export interface ICommonPostData {
  title: string;
  category: string;
  content: string;
  user: number;
  stack: Array<string>;
  worker: Array<string>;
}

export interface ICommonPost {
  type: string;
  data: ICommonPostData;
  history: RouteComponentProps['history'];
  boardType: string;
}

export interface ICommonLikePostData {
  postId: number;
  userId: number;
}
export interface ICommonLikePost {
  type: string;
  data: ICommonLikePostData;
}

export interface IRecruitPostingData {
  user: number;
  study: number;
  title: string;
  content: string;
  developer: number;
  designer: number;
  pm: number;
  start_date: string;
  end_date: string;
  stack: Array<string>;
}

export interface IRecruitPosting {
  type: string;
  data: IRecruitPostingData;
  history: RouteComponentProps['history'];
}

export interface ITeamProfileData {
  type: string;
  data: FormData;
  userId: number;
  history: RouteComponentProps['history'];
}

export interface ITeamProfileApiData {
  formData: FormData;
  userId: number;
}

export interface ITeamProfileIdData {
  type: string;
  data: {
    userId: number;
    postId: string;
  };
}

export interface ITeamProfileIdApiData {
  userId: number;
  postId: string;
}

export interface IRecruitPost {
  type: string;
  data: string;
}

export interface IRecruitPostLikeData {
  userId: number;
  postId: number;
}
export interface IRecruitPostLike {
  type: string;
  data: IRecruitPostLikeData;
}

export interface ITeamMemberJoinData {
  teamProfile: string;
  userId: number;
}
export interface ITeamMemberJoin {
  type: string;
  data: ITeamMemberJoinData;
}
