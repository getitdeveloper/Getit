import React from 'react';
import UserImg from '@assets/images/user.svg';
import { ContentContainer } from '@assets/styles/page';
import ParticipantsList from '@components/ParticipantsList/index';
import moment from 'moment';
import {
  Container,
  LeftContainer,
  RightContainer,
  ImageContainer,
  StudyName,
  ContentWrapper,
  TitleText,
  ContentText,
  Period,
  Label,
  Stacks,
  HorizontalLine,
  StudyProfile,
  DefaultProfile,
} from './styles';
import { ITeamProfileDetail } from './types';

function TeamProfileDetail({ data }: ITeamProfileDetail): JSX.Element {
  // 구조분해 사용할경우 오류 발생
  // const { image, title, content, stack, members } = data || null;
  const profileImage = data?.image;
  const title = data?.title;
  const content = data?.content;
  const stacks = data?.stack;
  const members = data?.members;

  const createdAt = data?.created_at;
  return (
    <ContentContainer>
      <Container>
        {/* 왼쪽 컨테이너 */}
        <LeftContainer>
          {/* 팀 프로필 이미지 */}
          <ImageContainer>
            {profileImage ? (
              <StudyProfile src={profileImage} alt='team profile' />
            ) : (
              <DefaultProfile>
                <img src={UserImg} alt='untitled profile' />
              </DefaultProfile>
            )}
          </ImageContainer>

          {/* 스터디명 */}
          <StudyName>스터디 프로필</StudyName>

          {/* 수평 구분선 */}
          <HorizontalLine />
        </LeftContainer>

        {/* 오른쪽 컨테이너 */}
        <RightContainer>
          <ContentWrapper>
            <Label>스터디명</Label>
            <TitleText>{title}</TitleText>
            <br />

            <Label>내용</Label>
            <ContentText>{content}</ContentText>
            <br />

            <Label>생성일</Label>
            <Period>{moment(createdAt).format('YYYY년 MM월 DD일')}</Period>
            <br />

            <Label>기술 스택</Label>
            <Stacks>
              {stacks?.map((value: string) => {
                return <li key={value}>{value}</li>;
              })}
            </Stacks>
            <br />

            <Label>참여중인 Get Iter</Label>
            <ParticipantsList participants={members} />
            <br />
          </ContentWrapper>
        </RightContainer>
      </Container>
    </ContentContainer>
  );
}

export default TeamProfileDetail;
