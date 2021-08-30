import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { profileDummyData, currentProject, finishedProject } from './dummyData';
import {
  PageContainer,
  ContentContainer,
  ProfileRight,
  ProfileLeft,
  InfoContainer,
  SubTitle,
  ProfileImage,
  MainProfile,
  ProfileNavItem,
  useStyles,
} from './styles';
import { USER_INFO_REQUEST } from '../../reducers/actions';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import { PageTitle, PageBackground } from '../../styles/page';
import Portfoilo from '../../Components/Portfolio';
import Project from '../../Components/Project';

const navItem = [
  {
    menu: '내 프로필',
    actionType: 'push',
    url: '/myprofile',
  },
  {
    menu: '관심있는 글',
    actionType: 'alert',
    message: '관심있는 글을 모아 보는 기능이 추가될 예정입니다.',
  },
  {
    menu: '내가 쓴 댓글',
    actionType: 'alert',
    message: '내가 쓴 댓글을 한 번에 볼 수 있는 기능이 추가될 예정입니다.',
  },
  {
    menu: '내가 쓴 글',
    actionType: 'alert',
    message: '내가 쓴 글을 한 번에 볼 수 있는 기능이 추가될 예정입니다',
  },
  {
    menu: '로그아웃',
    actionType: 'alert',
    message: '로그아웃 기능 구현 예정',
  },
  {
    menu: '탈퇴하기',
    actionType: 'alert',
    message: '탈퇴하기 기능 구현 예정',
  },
];

function ProfilePage(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.user).user;
  const history = useHistory();
  const classes = useStyles();

  React.useEffect(() => {
    dispatch({
      type: USER_INFO_REQUEST,
      data: {
        user_pk: user.user_pk,
      },
    });
  }, []);

  console.log(user);
  return (
    <div>
      <SubHeader />
      <PageBackground>
        <PageTitle>내 프로필</PageTitle>
        <PageContainer>
          <ProfileLeft>
            <MainProfile>
              {profileDummyData.img ? (
                <ProfileImage src={profileDummyData.img} alt='profileImage' />
              ) : (
                <ProfileImage src='/icons/user.svg' alt='profileImage' />
              )}
              <ContentContainer>
                닉네임 {profileDummyData.nickname}
              </ContentContainer>
              <ContentContainer>
                이메일 {profileDummyData.email}
              </ContentContainer>
              <ContentContainer> 직업 {profileDummyData.job} </ContentContainer>
            </MainProfile>
            <hr
              style={{
                border: '1px solid #e4e4e4',
                width: '100%',
                marginTop: '30%',
                marginBottom: '15%',
              }}
            />
            {navItem.map((content) => (
              <ProfileNavItem
                key={content.menu}
                onClick={() => {
                  if (content.actionType === 'alert') {
                    alert(content.message);
                  } else if (content.actionType === 'push' && content.url) {
                    return history.push(content.url);
                  }
                }}
              >
                {content.menu}
              </ProfileNavItem>
            ))}
          </ProfileLeft>
          <hr
            style={{
              borderTop: '1px solid #e4e4e4',
              height: 'auto',
            }}
          />
          <ProfileRight>
            <InfoContainer>{profileDummyData.info}</InfoContainer>
            <SubTitle>기술스택</SubTitle>
            {profileDummyData.stacks?.map((content) => (
              <Chip label={content} key={content} className={classes.chip} />
            ))}
            <SubTitle>포트폴리오</SubTitle>
            <Portfoilo />
            <SubTitle>프로젝트 현황</SubTitle>
            <Project />
            <SubTitle>완료된 프로젝트</SubTitle>
            <Project finished />
          </ProfileRight>
        </PageContainer>
      </PageBackground>
    </div>
  );
}

export default ProfilePage;
