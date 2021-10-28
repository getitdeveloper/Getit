import * as React from 'react';
import { RECRUIT_POST_REQUEST } from '@reducers/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPostId } from '@types';
import UserImg from '@assets/images/user.svg';
import MemberType from '@components/RecruitMembers/index';

import {
  RecruitPostDetailWrapper,
  ContainerWrapper,
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
  JoinMember,
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

  const startDate = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.start_date,
  );

  const endDate = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.end_date,
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

  const stacks = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.stack,
  );
  const studyProfile = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.study?.image,
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
    <RecruitPostDetailWrapper>
      <ContainerWrapper>
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
              <Period>{`${startDate} ~ ${endDate}`}</Period>
              <br />

              <Label>기술 스택</Label>
              <Stacks>
                {stacks.map((value: string) => {
                  return <li key={value}>{value}</li>;
                })}
              </Stacks>
              <br />

              <Label>참여중인 Get Iter</Label>
              <JoinMember>현재 참여중인 Get Iter가 없습니다.</JoinMember>
              <br />
            </ContentWrapper>
          </RightContainer>
        </Container>
      </ContainerWrapper>
    </RecruitPostDetailWrapper>
  );
}

export default RecruitPostDetail;
