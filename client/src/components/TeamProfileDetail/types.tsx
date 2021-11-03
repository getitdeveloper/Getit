export interface ITeamProfileDetail {
  data: {
    image: string;
    title: string;
    content: string;
    stack: Array<string>;
    members: Array<{ member: string; nickname: string }>;
    created_at: string;
  };
}
