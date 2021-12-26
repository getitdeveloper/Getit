export interface ITeamProfileDetail {
  post: {
    teamProfilePostDetail: {
      id: number;
      image: string | null;
      title: string;
      content: string;
      stack: Array<string> | [];
      members: Array<{ member: string; nickname: string }>;
      created_at: string;
      waiting_members: Array<{ waitmember: string; nickname: string }>;
    };
  };
}
