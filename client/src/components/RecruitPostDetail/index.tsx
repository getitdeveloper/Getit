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
  ImageBackground,
  ImageWrapper,
  ImageContainer,
  StudyName,
  MemberTypeWrapper,
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
} from './styles';

function RecruitPostDetail(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const recruitPostDetail = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost,
  );

  const worker = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.worker,
  );

  const startDate = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.start_date,
  );

  const endDate = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.end_date,
  );

  const developer = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.developer,
  );

  const designer = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.designer,
  );

  const pm = useSelector((state: RootStateOrAny) => state.post.recruitPost?.pm);

  const stacks = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.stack,
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
            <ImageWrapper>
              <ImageBackground>
                <ImageContainer>
                  <img src={UserImg} alt='study profile' />
                </ImageContainer>
              </ImageBackground>
            </ImageWrapper>

            {/* 스터디명 */}
            <StudyName>스터디명</StudyName>
            <MemberTypeWrapper>
              <ul>
                {worker.map((member: string) => {
                  return (
                    <li key={member}>
                      <MemberType member={member} />
                    </li>
                  );
                })}
              </ul>
            </MemberTypeWrapper>
            {/* 쪽지, 좋아요 아이콘 */}
            <IconWrapper>
              <IconContainer>
                <MailIcon />
              </IconContainer>
              <IconContainer>
                <LikeIcon />
              </IconContainer>
            </IconWrapper>
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
                  <div>{developer}명</div>
                </li>
                <li>
                  <div>디자이너</div>
                  <div>{designer}명</div>
                </li>
                <li>
                  <div>기획자</div>
                  <div>{pm}명</div>
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
