import React, { useState, useCallback, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import moment from 'moment';
import { HorizontalLine, IconButton } from '@assets/styles/commons';
import { COMMON_POST_LIKE_REQUEST } from '@reducers/actions';
import MemberType from '@components/RecruitMembers/index';
import UserImg from '@assets/images/user.svg';
import { IPostId } from '@types';
import { IPostItem } from './types';
import {
  WriterInfo,
  WriterInfoMobile,
  PostWrapper,
  PostInfoButton,
  PostTitle,
  DetailWrapper,
  PostDetailWrapper,
  DetailInfo,
  WriterImage,
  WriterName,
  LeftContainer,
  RightContainer,
  StyledDateRangeIcon,
  StyledFavoriteBorderIcon,
  StyledFavoriteIcon,
  StyledChatBubbleOutlineIcon,
} from './styles';

function PostItem({
  content,
  boardType = '',
  index = 0,
  length = 0,
}: IPostItem): JSX.Element {
  const history = useHistory();
  const { postId }: IPostId = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.profileInfo?.user_pk;
  const [likes, setLikes] = useState(content.likes);
  const [likeStatus, setLikeStatus] = useState(content.is_like);
  const [worker, setWorker] = useState<Map<string, number>>();

  useEffect(() => {
    const workerObj = new Map();
    content.worker.map((job: string) => {
      switch (job) {
        case '개발자':
          workerObj.set('developer', 1);
          break;
        case '디자이너':
          workerObj.set('designer', 1);
          break;
        case '기획자':
          workerObj.set('pm', 1);
          break;
        default:
          break;
      }
      return setWorker(workerObj);
    });
  }, []);

  const onHandleWirterProfile = () => console.log('글쓴이의 프로필로 이동');
  const onHandlePost = () => history.push(`/${boardType}Board/${content.id}`);

  const onHandleLike = useCallback(() => {
    if (!userId) {
      return alert('로그인이 필요합니다. 로그인 후 이용해 주세요.');
    }
    if (likeStatus) {
      setLikeStatus(false);
      setLikes(likes - 1);

      dispatch({
        type: COMMON_POST_LIKE_REQUEST,
        data: {
          board: content.id,
          likes: {
            commonpost: content.id,
            user: userId,
          },
        },
      });
    } else {
      setLikeStatus(true);
      setLikes(likes + 1);

      dispatch({
        type: COMMON_POST_LIKE_REQUEST,
        data: {
          board: content.id,
          likes: {
            commonpost: content.id,
            user: userId,
          },
        },
      });
    }
  }, [userId, likeStatus, likes, content]);

  const tabletSize = useMediaQuery({
    query: '(max-width: 600px)',
  });

  return (
    <div>
      <PostWrapper>
        <LeftContainer>
          <MemberType
            developer={worker?.get('developer')}
            designer={worker?.get('designer')}
            pm={worker?.get('pm')}
          />
          {/* 상세페이지에서는 제목 클릭 불가하도록 설정 */}
          {postId ? (
            <PostTitle>{content.title}</PostTitle>
          ) : (
            <PostInfoButton onClick={onHandlePost}>
              <PostTitle>{content.title}</PostTitle>
            </PostInfoButton>
          )}

          <DetailWrapper>
            <PostDetailWrapper>
              <DetailInfo>
                <StyledDateRangeIcon />
                {tabletSize ? (
                  <p>{moment(content.create_at).format('YY/MM/DD')}</p>
                ) : (
                  <p>{moment(content.create_at).format('YYYY년 MM월 DD일')}</p>
                )}
              </DetailInfo>

              <IconButton type='button' onClick={onHandleLike}>
                {!likeStatus && <StyledFavoriteBorderIcon />}
                {likeStatus && <StyledFavoriteIcon />}
              </IconButton>
              <DetailInfo>{likes}</DetailInfo>

              <StyledChatBubbleOutlineIcon />
              <DetailInfo>{content.comments}</DetailInfo>
              {/* 테블릿 이하 버전에서만 렌더링 */}
              <WriterInfoMobile onClick={onHandleWirterProfile}>
                <WriterImage src={UserImg} alt='writer-profile' />
                <WriterName>{content.user?.profile.nickname}</WriterName>
              </WriterInfoMobile>
            </PostDetailWrapper>
          </DetailWrapper>
        </LeftContainer>
        <RightContainer>
          <WriterInfo onClick={onHandleWirterProfile}>
            <WriterImage src={UserImg} alt='writer-profile' />
            <WriterName>{content.user?.profile.nickname}</WriterName>
          </WriterInfo>
        </RightContainer>
      </PostWrapper>
      {/* 페이지의 마지막 게시글 또는 페이지에 게시글이 하나인 경우 구분선 X, 내 프로필 페이지에서는 구분선 X */}
      {index === length - 1 || pathname === '/myprofile' ? null : (
        <HorizontalLine width='100%' />
      )}
    </div>
  );
}

export default PostItem;
