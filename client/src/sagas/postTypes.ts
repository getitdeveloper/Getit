export interface PostData {
  title: string;
  category: string;
  content: string;
  user: number;
}

export interface TeamProfileData {
  type: string;
  data: FormData;
  userId: number;
}

export interface TeamProfileApiData {
  formData: FormData;
  userId: number;
}
