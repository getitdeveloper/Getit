import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import { profileDummyData } from './dummyData';
import {
  PageTitle,
  PageContainer,
  MainContainer,
  TagContainer,
  ContentContainer,
  ProfileRight,
  ProfileLeft,
  InfoContainer,
  SubTitle,
} from './styles';

function ProfilePage(): JSX.Element {
  return (
    <MainContainer>
      <PageTitle>내 프로필</PageTitle>
      <PageContainer>
        <ProfileLeft>
          {profileDummyData.img ? (
            <img src={profileDummyData.img} alt='profileImage' />
          ) : (
            <img src='/icons/user.svg' alt='profileImage' />
          )}
          <ContentContainer>
            {' '}
            닉네임 {profileDummyData.nickname}{' '}
          </ContentContainer>
          <ContentContainer> 이메일 {profileDummyData.email} </ContentContainer>
          <ContentContainer> 직업 {profileDummyData.job} </ContentContainer>
          <hr
            style={{
              borderTop: '1px solid #e4e4e4',
              width: 'auto',
            }}
          />
          <p>내 프로필</p>
          <p>관심있는 글</p>
          <p>내가 쓴 글</p>
          <p>내가 쓴 댓글</p>
          <p>로그아웃</p>
          <p>탈퇴하기</p>
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
          <TagContainer>
            {profileDummyData.stacks?.map((content) => (
              <Chip label={content} key={content} />
            ))}
          </TagContainer>
          <SubTitle>포트폴리오</SubTitle>
          {profileDummyData.portfolio?.map((content) => (
            <p key={content}>{content}</p>
          ))}
          <SubTitle>프로젝트 현황</SubTitle>
          <SubTitle>완료된 프로젝트</SubTitle>
        </ProfileRight>
      </PageContainer>
    </MainContainer>
  );
}

export default ProfilePage;
