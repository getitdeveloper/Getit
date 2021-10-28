export const navItem = [
  {
    menu: '내 프로필',
    id: 0,
  },
  {
    menu: '팀 프로필',
    id: 1,
  },
  {
    menu: '관심있는 글',
    id: 2,
  },
  {
    menu: '내가 쓴 글',
    id: 3,
  },
  {
    menu: '내가 쓴 댓글',
    id: 4,
  },
  {
    menu: '로그아웃',
    id: 5,
  },
];

export interface INavItem {
  menu: string;
  id: number;
}
