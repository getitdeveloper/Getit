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
import RecruitBoardDetailPage from '@pages/RecruitBoardDetailPage';
import TeamProfileFormPage from '@pages/TeamProfileFormPage';
import TeamProfileDetailPage from '@pages/TeamProfileDetailPage';

interface RouteList {
  path: string;
  page: (props?: JSX.Element) => JSX.Element | null;
  auth: null | boolean;
}
// 라우팅 경로 및 페이지
export const routeList: Array<RouteList> = [
  {
    path: '/',
    page: MainPage,
    auth: null,
  },
  {
    path: '/myprofile',
    page: ProfilePage,
    auth: true,
  },
  {
    path: '/myprofile/teamprofile/form',
    page: TeamProfileFormPage,
    auth: true,
  },
  {
    path: '/myprofile/teamprofile/:postId',
    page: TeamProfileDetailPage,
    auth: true,
  },
  {
    path: '/register',
    page: RegisterPage,
    auth: false,
  },
  {
    path: '/searchResult',
    page: SearchResultPage,
    auth: null,
  },
  {
    path: '/callback/kakao',
    page: KakaoOAuth2Callback,
    auth: false,
  },
  {
    path: '/callback/github',
    page: GithubCallback,
    auth: false,
  },
  {
    path: '/questionBoard',
    page: QuestionBoardPage,
    auth: null,
  },
  {
    path: '/questionBoard/form',
    page: QuestionFormPage,
    auth: true,
  },
  {
    path: '/questionBoard/:postId',
    page: QuestionDetailPage,
    auth: null,
  },
  {
    path: '/freeBoard',
    page: FreeBoardPage,
    auth: null,
  },
  {
    path: '/freeBoard/form',
    page: FreeBoardFormPage,
    auth: true,
  },
  {
    path: '/freeBoard/:postId',
    page: FreeBoardDetailPage,
    auth: null,
  },
  {
    path: '/recruitBoard',
    page: RecruitBoardPage,
    auth: null,
  },
  {
    path: '/recruitBoard/form',
    page: RecruitFormPage,
    auth: true,
  },
  {
    path: '/recruitBoard/:postId',
    page: RecruitBoardDetailPage,
    auth: null,
  },
  {
    path: '*',
    page: NotFoundPage,
    auth: null,
  },
];
