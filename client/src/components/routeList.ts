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
}
// 라우팅 경로 및 페이지
export const routeList: Array<RouteList> = [
  {
    path: '/',
    page: MainPage,
  },
  {
    path: '/myprofile',
    page: ProfilePage,
  },
  {
    path: '/myprofile/teamprofile/form',
    page: TeamProfileFormPage,
  },
  {
    path: '/myprofile/teamprofile/:postId',
    page: TeamProfileDetailPage,
  },
  {
    path: '/register',
    page: RegisterPage,
  },
  {
    path: '/searchResult',
    page: SearchResultPage,
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
    path: '/questionBoard/form',
    page: QuestionFormPage,
  },
  {
    path: '/questionBoard/:postId',
    page: QuestionDetailPage,
  },
  {
    path: '/freeBoard',
    page: FreeBoardPage,
  },
  {
    path: '/freeBoard/form',
    page: FreeBoardFormPage,
  },
  {
    path: '/freeBoard/:postId',
    page: FreeBoardDetailPage,
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
    path: '/recruitBoard/:postId',
    page: RecruitBoardDetailPage,
  },
  {
    path: '*',
    page: NotFoundPage,
  },
];
