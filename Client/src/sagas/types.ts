export interface ResponseUserInfo {
  data: {
    nickname: string;
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
