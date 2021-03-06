import React, { useEffect, useCallback } from 'react';
import {
  RECRUIT_POST_REQUEST,
  TEAM_MEMBER_JOIN_REQUEST,
  TEAM_MEMBER_JOIN_SUCCESS,
} from '@reducers/actions';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPostId } from '@types';
import UserImg from '@assets/images/user.svg';
import { ContentContainer } from '@assets/styles/page';
import MemberType from '@components/RecruitMembers/index';
import ParticipantsList from '@components/ParticipantsList/index';

import {
  Container,
  LeftContainer,
  RightContainer,
  ImageContainer,
  StudyName,
  ContentWrapper,
  TitleText,
  ContentText,
  RecruitMember,
  Period,
  Label,
  Stacks,
  IconWrapper,
  IconContainer,
  MailIcon,
  LikeIcon,
  JoinButtonWrapper,
  JoinButton,
  HorizontalLine,
  StudyProfile,
  DefaultProfile,
} from './styles';

function RecruitPostDetail(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const recruitPostDetail = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost,
  );
  const postUserId = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.user.id,
  );
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );
  const joinRequestStatus = useSelector(
    (state: RootStateOrAny) => state.post.teamMembserJoinStatus,
  );
  const joinRequestSuccess = useSelector(
    (state: RootStateOrAny) => state.post.teamMemberJoinSuccess,
  );

  const worker = useSelector((state: RootStateOrAny) => {
    const developer = state.post.recruitPost?.developer;
    const designer = state.post.recruitPost?.designer;
    const pm = state.post.recruitPost?.pm;
    return {
      developer,
      designer,
      pm,
    };
  });

  const studyProfile = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.study?.image,
  );

  const participants = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.study?.members,
  );
  const teamProfileId = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.study?.id,
  );

  useEffect(() => {
    dispatch({
      type: RECRUIT_POST_REQUEST,
      data: postId,
    });
  }, []);

  useEffect(() => {
    // ??? ?????? ????????? ????????? ??????
    if (joinRequestStatus === 'success') {
      dispatch({
        type: TEAM_MEMBER_JOIN_SUCCESS,
        data: { message: null },
      });
      return alert('????????? ??????????????????.');
    }
    // ?????? ??? ?????? ????????? ????????? ??? ??????????????? ????????? ??????
    if (joinRequestStatus === 'fail') {
      dispatch({
        type: TEAM_MEMBER_JOIN_SUCCESS,
        data: { message: null },
      });
      return alert('?????? ??????????????????. ?????? ????????? ?????????.');
    }
  }, [joinRequestSuccess]);

  const joinMember = useCallback(() => {
    if (!userId) {
      return alert('???????????? ???????????????. ????????? ??? ????????? ?????????.');
    }

    if (postUserId === userId) {
      return alert('????????? ????????? ????????? ?????????.');
    }

    dispatch({
      type: TEAM_MEMBER_JOIN_REQUEST,
      data: {
        teamProfileId,
        userId,
      },
    });
  }, [userId, teamProfileId]);

  if (!recruitPostDetail) {
    return <LoadingSpinner />;
  }

  return (
    <ContentContainer>
      <Container>
        {/* ?????? ???????????? */}
        <LeftContainer>
          {/* ??? ????????? ????????? */}
          <ImageContainer>
            {studyProfile ? (
              <StudyProfile src={studyProfile} alt='study profile' />
            ) : (
              <DefaultProfile>
                <img src={UserImg} alt='untitled profile' />
              </DefaultProfile>
            )}
          </ImageContainer>

          {/* ???????????? */}
          <StudyName>????????????</StudyName>

          <MemberType
            developer={worker?.developer}
            designer={worker?.designer}
            pm={worker?.pm}
            position='center'
          />

          {/* ??????, ????????? ????????? */}
          <IconWrapper>
            {/* <IconContainer>
              <MailIcon />
            </IconContainer>
            <IconContainer>
              <LikeIcon />
            </IconContainer> */}
          </IconWrapper>
          {/* ?????? ????????? */}
          <HorizontalLine />
        </LeftContainer>

        {/* ????????? ???????????? */}
        <RightContainer>
          <ContentWrapper>
            <Label>??????</Label>
            <TitleText>{recruitPostDetail.title}</TitleText>
            <br />

            <Label>??????</Label>
            <ContentText>{recruitPostDetail.content}</ContentText>
            <br />

            <Label>?????? ??????</Label>
            <RecruitMember>
              <li>
                <div>?????????</div>
                <div>{worker.developer}???</div>
              </li>
              <li>
                <div>????????????</div>
                <div>{worker.designer}???</div>
              </li>
              <li>
                <div>?????????</div>
                <div>{worker.pm}???</div>
              </li>
            </RecruitMember>
            <br />

            <Label>?????? ??????</Label>
            <Period>{`${recruitPostDetail.start_date} ~ ${recruitPostDetail.end_date}`}</Period>
            <br />

            <Label>?????? ??????</Label>
            <Stacks>
              {recruitPostDetail.stack.map((value: string) => {
                return <li key={value}>{value}</li>;
              })}
            </Stacks>
            <br />

            <Label>???????????? Get Iter</Label>
            <ParticipantsList participants={participants} />
            <br />
            <JoinButtonWrapper>
              <JoinButton onClick={joinMember}>????????????</JoinButton>
            </JoinButtonWrapper>
          </ContentWrapper>
        </RightContainer>
      </Container>
    </ContentContainer>
  );
}

export default RecruitPostDetail;
