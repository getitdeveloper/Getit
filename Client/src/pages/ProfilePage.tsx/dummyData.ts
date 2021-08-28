interface DummyData {
  user: number;
  user_pk: number;
  nickname: string;
  job: string;
  developer_level?: string;
  designer_and_pm_level?: string;
  img?: string;
  email: string;
  info?: string;
  git?: string;
  portfolio?: string[];
  stacks?: string[];
}
// profile 더미데이터
export const profileDummyData: DummyData = {
  user: 0,
  user_pk: 0,
  nickname: '박지수',
  job: '개발자',
  developer_level: '코등학생',
  email: 'alyssapark96@gmail.com',
  info: '안녕하세요 프로젝트로 덕을 쌓고 싶은 개발자, 박지수입니다!',
  git: 'https://github.com/alyssa1996',
  stacks: ['HTML', 'CSS', 'JavaScript', 'Python', 'React'],
};
