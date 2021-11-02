export interface PostData {
  title: string;
  category: string;
  content: string;
  user: number;
}

export interface PostingData {
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

export interface TeamProfileData {
  type: string;
  data: FormData;
  userId: number;
  history: any;
}

export interface TeamProfileApiData {
  formData: FormData;
  userId: number;
}

export interface ITeamProfileRemove {
  type: string;
  data: {
    userId: number;
    postId: string;
  };
  history: any;
}

export interface ITeamProfileRemoveApiData {
  userId: number;
  postId: string;
}
