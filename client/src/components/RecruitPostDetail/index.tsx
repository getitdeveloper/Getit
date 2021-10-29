import React, { useEffect } from 'react';
import { RECRUIT_POST_REQUEST } from '@reducers/actions';
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
  HorizontalLine,
  StudyProfile,
} from './styles';

function RecruitPostDetail(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const recruitPostDetail = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost,
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

  useEffect(() => {
    dispatch({
      type: RECRUIT_POST_REQUEST,
      data: postId,
    });
  }, []);

  if (!recruitPostDetail) {
    return <LoadingSpinner />;
  }

  return (
    <ContentContainer>
      <Container>
        {/* 왼쪽 컨테이너 */}
        <LeftContainer>
          {/* 팀 프로필 이미지 */}
          <ImageContainer>
            <StudyProfile
              src={studyProfile || UserImg}
              alt='study profile'
              studyProfile={studyProfile}
            />
          </ImageContainer>

          {/* 스터디명 */}
          <StudyName>스터디명</StudyName>

          <MemberType
            developer={worker?.developer}
            designer={worker?.designer}
            pm={worker?.pm}
            position='center'
          />

          {/* 쪽지, 좋아요 아이콘 */}
          <IconWrapper>
            <IconContainer>
              <MailIcon />
            </IconContainer>
            <IconContainer>
              <LikeIcon />
            </IconContainer>
          </IconWrapper>
          {/* 수평 구분선 */}
          <HorizontalLine />
        </LeftContainer>

        {/* 오른쪽 컨테이너 */}
        <RightContainer>
          <ContentWrapper>
            <Label>제목</Label>
            <TitleText>{recruitPostDetail.title}</TitleText>
            <br />

            <Label>내용</Label>
            <ContentText>{recruitPostDetail.content}</ContentText>
            <br />

            <Label>모집 인원</Label>
            <RecruitMember>
              <li>
                <div>개발자</div>
                <div>{worker.developer}명</div>
              </li>
              <li>
                <div>디자이너</div>
                <div>{worker.designer}명</div>
              </li>
              <li>
                <div>기획자</div>
                <div>{worker.pm}명</div>
              </li>
            </RecruitMember>
            <br />

            <Label>모집 기간</Label>
            <Period>{`${recruitPostDetail.start_date} ~ ${recruitPostDetail.end_date}`}</Period>
            <br />

            <Label>기술 스택</Label>
            <Stacks>
              {recruitPostDetail.stack.map((value: string) => {
                return <li key={value}>{value}</li>;
              })}
            </Stacks>
            <br />

            <Label>참여중인 Get Iter</Label>
            <ParticipantsList participants={participants} />
            <br />
          </ContentWrapper>
        </RightContainer>
      </Container>
    </ContentContainer>
  );
}

export default RecruitPostDetail;
