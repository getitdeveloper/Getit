import MainPage from '@pages/MainPage';
import KakaoOAuth2Callback from '@auth/KakaoLogin/KakaoOAuth2Callback';
import GithubCallback from '@auth/GithubLogin/GithubCallback';
import QuestionBoardPage from '@pages/QuestionBoardPage';
import ProfilePage from '@pages/ProfilePage';
import FreeBoardPage from '@pages/FreeBoardPage';
import FreeBoardDetailPage from '@pages/FreeBoardDetailPage';
import QuestionDetailPage from '@pages/QuestionDetailPage';
import RegisterPage from '@pages/RegisterPage';
import QuestionFormPage from '@pages/QuestionFormPage';
import RecruitBoardPage from '@pages/RecruitBoardPage';
import FreeBoardFormPage from '@pages/FreeBoardFormPage';
import RecruitFormPage from '@pages/RecruitFormPage';
import SearchResultPage from '@pages/SearchResultPage';
import NotFoundPage from '@pages/NotFoundPage';

interface RouteList {
  path: string;
  page: (props?: any) => JSX.Element | null;
}
// 라우팅 경로 및 페이지
export const routeList: Array<RouteList> = [
  {
    path: '/',
    page: MainPage,
  },
  {
    path: '/callback/kakao',
    page: KakaoOAuth2Callback,
  },
  {
    path: '/callback/github',
    page: GithubCallback,
  },
  {
    path: '/questionBoard',
    page: QuestionBoardPage,
  },
  {
    path: '/freeBoard',
    page: FreeBoardPage,
  },
  {
    path: '/myprofile',
    page: ProfilePage,
  },
  {
    path: '/freeBoard/detail',
    page: FreeBoardDetailPage,
  },
  {
    path: '/questionBoard/detail',
    page: QuestionDetailPage,
  },
  {
    path: '/register',
    page: RegisterPage,
  },
  {
    path: '/questionBoard/form',
    page: QuestionFormPage,
  },
  {
    path: '/freeBoard/form',
    page: FreeBoardFormPage,
  },
  {
    path: '/recruitBoard',
    page: RecruitBoardPage,
  },
  {
    path: '/recruitBoard/form',
    page: RecruitFormPage,
  },
  {
    path: '/searchResult',
    page: SearchResultPage,
  },
  {
    path: '*',
    page: NotFoundPage,
  },
];
