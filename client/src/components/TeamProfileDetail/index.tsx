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
        {/* ?????? ???????????? */}
        <LeftContainer>
          {/* ??? ????????? ????????? */}
          <ImageContainer>
            {profile.image ? (
              <StudyProfile src={profile.image} alt='team profile' />
            ) : (
              <DefaultProfile>
                <img src={UserImg} alt='untitled profile' />
              </DefaultProfile>
            )}
          </ImageContainer>

          {/* ???????????? */}
          <StudyName>????????? ?????????</StudyName>

          {/* ?????? ????????? */}
          <HorizontalLine />
        </LeftContainer>

        {/* ????????? ???????????? */}
        <RightContainer>
          <ContentWrapper>
            <Label>????????????</Label>
            <TitleText>{profile.title}</TitleText>
            <br />

            <Label>??????</Label>
            <ContentText>{profile.content}</ContentText>
            <br />

            <Label>?????????</Label>
            <Period>
              {moment(profile.createdAt).format('YYYY??? MM??? DD???')}
            </Period>
            <br />

            <Label>?????? ??????</Label>
            <Stacks>
              {profile.stacks?.map((value: string) => {
                return <li key={value}>{value}</li>;
              })}
            </Stacks>
            <br />

            <Label>???????????? Get Iter</Label>
            <ParticipantsList participants={profile.members} />
            <br />

            <Label>?????? ?????? ??????</Label>
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
                        ??????
                      </button>
                    </li>
                  );
                })
              ) : (
                <Notification>?????? ?????? ????????? ????????? ????????????.</Notification>
              )}
            </JoinUsers>
          </ContentWrapper>
        </RightContainer>
      </Container>
    </ContentContainer>
  );
}

export default TeamProfileDetail;
