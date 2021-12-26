import React, { useEffect, useCallback, MouseEvent } from 'react';
import UserImg from '@assets/images/user.svg';
import { ContentContainer } from '@assets/styles/page';
import ParticipantsList from '@components/ParticipantsList/index';
import moment from 'moment';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IPostId } from '@types';
import {
  TEAM_MEMBER_JOIN_REQUEST,
  TEAM_PROFILE_POST_DETAIL_REQUEST,
} from '@reducers/actions';
import LoadingSpinner from '@components/LoadingSpinner';
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
  JoinUsers,
  Notification,
} from './styles';
import { ITeamProfileDetail } from './types';

function TeamProfileDetail(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user,
  );
  const joinRequestSuccess = useSelector(
    (state: RootStateOrAny) => state.post.teamMemberJoinSuccess,
  );

  const profile = useSelector((state: ITeamProfileDetail) => {
    const id = state.post.teamProfilePostDetail?.id;
    const image = state.post.teamProfilePostDetail?.image;
    const title = state.post.teamProfilePostDetail?.title;
    const content = state.post.teamProfilePostDetail?.content;
    const stacks = state.post.teamProfilePostDetail?.stack;
    const members = state.post.teamProfilePostDetail?.members;
    const createdAt = state.post.teamProfilePostDetail?.created_at;
    const waitingMember = state.post.teamProfilePostDetail?.waiting_members;
    return {
      id,
      image,
      title,
      content,
      stacks,
      members,
      createdAt,
      waitingMember,
    };
  });

  useEffect(() => {
    dispatch({
      type: TEAM_PROFILE_POST_DETAIL_REQUEST,
      data: { userId, postId },
    });
  }, [joinRequestSuccess]);

  const handleConsent = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { id } = event.target as HTMLButtonElement;
      dispatch({
        type: TEAM_MEMBER_JOIN_REQUEST,
        data: {
          teamProfileId: profile.id,
          userId: id,
          consent: true,
        },
      });
    },
    [profile, userId],
  );

  if (!profile) {
    return <LoadingSpinner />;
  }

  return (
    <ContentContainer>
      <Container>
        {/* 왼쪽 컨테이너 */}
        <LeftContainer>
          {/* 팀 프로필 이미지 */}
          <ImageContainer>
            {profile.image ? (
              <StudyProfile src={profile.image} alt='team profile' />
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
            <TitleText>{profile.title}</TitleText>
            <br />

            <Label>내용</Label>
            <ContentText>{profile.content}</ContentText>
            <br />

            <Label>생성일</Label>
            <Period>
              {moment(profile.createdAt).format('YYYY년 MM월 DD일')}
            </Period>
            <br />

            <Label>기술 스택</Label>
            <Stacks>
              {profile.stacks?.map((value: string) => {
                return <li key={value}>{value}</li>;
              })}
            </Stacks>
            <br />

            <Label>참여중인 Get Iter</Label>
            <ParticipantsList participants={profile.members} />
            <br />

            <Label>팀원 신청 목록</Label>
            <JoinUsers>
              {profile.waitingMember?.length >= 1 ? (
                profile.waitingMember?.map((user) => {
                  return (
                    <li key={user.nickname}>
                      <span>{user.nickname}</span>
                      <button
                        type='button'
                        id={user.waitmember}
                        onClick={handleConsent}
                      >
                        수락
                      </button>
                    </li>
                  );
                })
              ) : (
                <Notification>팀원 참여 신청한 인원이 없습니다.</Notification>
              )}
            </JoinUsers>
          </ContentWrapper>
        </RightContainer>
      </Container>
    </ContentContainer>
  );
}

export default TeamProfileDetail;
