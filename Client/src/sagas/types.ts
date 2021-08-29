export interface ResponseUserInfo {
  data: {
    user: number;
    user_pk: number;
    nickname: string;
    job: string;
    developer_level: string;
    img: string;
    email: string;
    info: string;
    git: string;
    stacks: number[];
    portfolio: object[];
  };
}

export interface GoogleAccessData {
  social: string;
  access_token: string;
}

export interface KakaoAccessData {
  social: string;
  API_KEY: string;
  REDIRECT_URI: string;
  code: string;
}

export interface GithubAccessData {
  social: string;
  client_id: string;
  client_secret: string;
  code: string;
}
