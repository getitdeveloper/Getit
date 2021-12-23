export interface IProfileInfo {
  user: number;
  user_pk: number;
  job: string;
  developer_level: string;
  designer_and_pm_level: string;
  image?: string | null;
  email: string;
  info: string | null;
  git: string | null;
  stack: string[];
}

export interface IPortfolio {
  id?: number;
  user: number;
  title: string;
  contents: string;
  image?: string | null;
  link: string;
}

export interface ICommonPostItem {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string | null;
  create_at: string;
  user: IUser;
  likes: number;
  comments: number;
  is_like: Array<{ user: number }>;
  worker: Array<string>;
  stack: Array<string>;
}

export interface ICommonPostList {
  count: number;
  next: string;
  previous: string | null;
  results: Array<ICommonPostItem>;
}

export interface IUser {
  id: number;
  profile: {
    nickname: string;
    image: string | null;
  };
}

export interface ILikedPost {
  commonpost: IPostItem;
}

export interface IPostItem {
  id: number;
  title: string;
  category: string;
  content: string;
  image?: string;
  create_at?: string;
  user: IUser;
  likes?: number;
  comments?: number;
  is_like?: boolean;
  worker: Array<string>;
  stack: Array<string>;
}

export interface IPost {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string | null;
  is_like: Array<{ user: number }>;
  create_at: string;
  user: {
    id: number;
    profile: {
      nickname: string;
      image: string | null;
    };
  };
  likes: number;
  comments: number;
  worker: Array<string>;
  stack: Array<string> | [];
}

export interface ICommentList {
  commonpost?: number;
  content: string;
  create_at: string;
  recruitpostpost?: number;
  user: IUser;
}

export interface IComment {
  user: IUser;
  commonpost?: number;
  recruitpost?: number;
  content: string;
  create_at: string;
}

export interface IBoardType {
  boardType: string;
}

export interface LoginProps {
  onClose: () => void;
}

export interface IRecruitPost {
  comments: number;
  content: string;
  create_at: string;
  designer: number;
  developer: number;
  end_date: string;
  id: number;
  is_like: Array<{ user: number }>;
  likes: number;
  pm: number;
  stack: Array<string>;
  start_date: string;
  status: boolean;
  study: {
    content: string;
    created_at: string;
    id: number;
    image: string | null;
    name: string;
    user: number;
    members: Array<{
      member: string;
      nickname: string;
    }>;
  };
  title: string;
  user: IUser;
  worker: string[];
}

export interface ITeamProfilePostDetail {
  id: number;
  user: number;
  title: string;
  content: string;
  status: boolean;
  image: string;
  stack: Array<string>;
  created_at: string;
  members: Array<{ member: string; nickname: string }>;
}

export interface IPostId {
  postId: string;
}

export interface IUpdatedProfileInfo {
  email: string;
  git: string | null;
  info: string;
  job: string;
  level: string | null;
  nickname: string;
  stack: Array<string>;
  user: number;
  user_pk: number;
}
