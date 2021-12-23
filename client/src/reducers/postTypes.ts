import { IPostItem, IRecruitPost, ITeamProfilePostDetail } from '../types';
import {
  COMMON_POST_REQUEST,
  COMMON_POST_SUCCESS,
  COMMON_POST_FAILURE,
  COMMON_POST_REGISTER_REQUEST,
  COMMON_POST_REGISTER_SUCCESS,
  COMMON_POST_REGISTER_FAILURE,
  COMMON_POST_LIKE_REQUEST,
  COMMON_POST_LIKE_SUCCESS,
  COMMON_POST_LIKE_FAILURE,
  RECRUIT_POST_REQUEST,
  RECRUIT_POST_SUCCESS,
  RECRUIT_POST_FAILURE,
  TEAM_PROFILE_REGISTER_REQUEST,
  TEAM_PROFILE_REGISTER_SUCCESS,
  TEAM_PROFILE_REGISTER_FAILURE,
  RECRUIT_POSTING_FAILURE,
  RECRUIT_POSTING_SUCCESS,
  RECRUIT_POSTING_REQUEST,
  TEAM_PROFILE_REMOVE_REQUEST,
  TEAM_PROFILE_REMOVE_SUCCESS,
  TEAM_PROFILE_REMOVE_FAILURE,
  TEAM_PROFILE_POST_DETAIL_REQUEST,
  TEAM_PROFILE_POST_DETAIL_SUCCESS,
  TEAM_PROFILE_POST_DETAIL_FAILURE,
  RECRUIT_POST_LIKE_SUCCESS,
  RECRUIT_POST_LIKE_FAILURE,
  RECRUIT_POST_LIKE_REQUEST,
} from './actions';

export interface InitialState {
  commonPost: IPostItem | null;
  recruitPost: IRecruitPost | null;
  teamProfilePostDetail: ITeamProfilePostDetail | null;
  commonPostRequest: boolean;
  commonPostSuccess: boolean;
  commonPostFailure: string | null;
  commonPostRegisterRequest: boolean;
  commonPostRegisterSuccess: boolean;
  commonPostRegisterFailure: string | null;
  commonPostLikeRequest: boolean;
  commonPostLikeSuccess: boolean;
  commonPostLikeFailure: string | null;
  recruitPostLikeRequest: boolean;
  recruitPostLikeSuccess: boolean;
  recruitPostLikeFailure: string | null;
  recruitPostRequest: boolean;
  recruitPostSuccess: boolean;
  recruitPostFailure: string | null;
  recruitPostingRequest: boolean;
  recruitPostingSuccess: boolean;
  recruitPostingFailure: string | null;
  teamProfileRegisterRequest: boolean;
  teamProfileRegisterSuccess: boolean;
  teamProfileRegisterFailure: string | null;
  teamProfileRemoveRequest: boolean;
  teamProfileRemoveSuccess: boolean;
  teamProfileRemoveFailure: string | null;
  teamProfilePostDetailRequest: boolean;
  teamProfilePostDetailSuccess: boolean;
  teamProfilePostDetailFailure: string | null;
}

// 자유/질문게시판 글 가져오기
export interface CommonPostRequest {
  type: typeof COMMON_POST_REQUEST;
}

export interface CommonPostSuccess {
  type: typeof COMMON_POST_SUCCESS;
  data: IPostItem;
}

export interface CommonPostFailure {
  type: typeof COMMON_POST_FAILURE;
  error: string;
}

// 자유/질문게시판 글 쓰기
export interface CommonPostRegisterRequest {
  type: typeof COMMON_POST_REGISTER_REQUEST;
}

export interface CommonPostRegisterSuccess {
  type: typeof COMMON_POST_REGISTER_SUCCESS;
  data: IPostItem;
}

export interface CommonPostRegisterFailure {
  type: typeof COMMON_POST_REGISTER_FAILURE;
  error: string;
}

// 자유/질문 게시판 게시글에 좋아요
export interface CommonPostLikeRequest {
  type: typeof COMMON_POST_LIKE_REQUEST;
}

export interface CommonPostLikeSuccess {
  type: typeof COMMON_POST_LIKE_SUCCESS;
  data: {
    counts: number;
  };
}

export interface CommonPostLikeFailure {
  type: typeof COMMON_POST_LIKE_FAILURE;
  error: string;
}

// 모집게시판 게시글 좋아요
export interface IRecruitPostLikeRequest {
  type: typeof RECRUIT_POST_LIKE_REQUEST;
  data: {
    userId: number;
    postId: number;
  };
}

export interface IRecruitPostLikeSuccess {
  type: typeof RECRUIT_POST_LIKE_SUCCESS;
  data: any;
}

export interface IRecruitPostLikeFailure {
  type: typeof RECRUIT_POST_LIKE_FAILURE;
  error: string;
}

// 모집 게시판 글 상세내용 가져오기
export interface RecruitPostDetailRequest {
  type: typeof RECRUIT_POST_REQUEST;
}

export interface RecruitPostDetailSuccess {
  type: typeof RECRUIT_POST_SUCCESS;
  data: IRecruitPost;
}

export interface RecruitPostDetailFailure {
  type: typeof RECRUIT_POST_FAILURE;
  error: string;
}

export interface TeamProfileRegisterRequest {
  type: typeof TEAM_PROFILE_REGISTER_REQUEST;
}

export interface TeamProfileRegisterSuccess {
  type: typeof TEAM_PROFILE_REGISTER_SUCCESS;
}

export interface TeamProfileRegisterFailure {
  type: typeof TEAM_PROFILE_REGISTER_FAILURE;
  error: string;
}

export interface RecruitPostingRequest {
  type: typeof RECRUIT_POSTING_REQUEST;
}

export interface RecruitPostingSuccess {
  type: typeof RECRUIT_POSTING_SUCCESS;
}

export interface RecruitPostingFailure {
  type: typeof RECRUIT_POSTING_FAILURE;
  error: string;
}

export interface TeamProfileRemoveRequest {
  type: typeof TEAM_PROFILE_REMOVE_REQUEST;
}

export interface TeamProfileRemoveSuccess {
  type: typeof TEAM_PROFILE_REMOVE_SUCCESS;
}

export interface TeamProfileRemoveFailure {
  type: typeof TEAM_PROFILE_REMOVE_FAILURE;
  error: string;
}

export interface TeamProfilePostDetailRequest {
  type: typeof TEAM_PROFILE_POST_DETAIL_REQUEST;
}

export interface TeamProfilePostDetailSuccess {
  type: typeof TEAM_PROFILE_POST_DETAIL_SUCCESS;
  data: ITeamProfilePostDetail;
}

export interface TeamProfilePostDetailFailure {
  type: typeof TEAM_PROFILE_POST_DETAIL_FAILURE;
  error: string;
}

export type PostActions =
  | CommonPostRequest
  | CommonPostSuccess
  | CommonPostFailure
  | CommonPostRegisterRequest
  | CommonPostRegisterSuccess
  | CommonPostRegisterFailure
  | CommonPostLikeRequest
  | CommonPostLikeSuccess
  | CommonPostLikeFailure
  | IRecruitPostLikeRequest
  | IRecruitPostLikeSuccess
  | IRecruitPostLikeFailure
  | RecruitPostDetailRequest
  | RecruitPostDetailSuccess
  | RecruitPostDetailFailure
  | TeamProfileRegisterRequest
  | TeamProfileRegisterSuccess
  | TeamProfileRegisterFailure
  | RecruitPostingRequest
  | RecruitPostingSuccess
  | RecruitPostingFailure
  | TeamProfileRemoveRequest
  | TeamProfileRemoveSuccess
  | TeamProfileRemoveFailure
  | TeamProfilePostDetailRequest
  | TeamProfilePostDetailSuccess
  | TeamProfilePostDetailFailure;
