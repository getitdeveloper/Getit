import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import { HorizontalLine, IconButton } from '@assets/styles/commons';
import { COMMON_POST_LIKE_REQUEST } from '@reducers/actions';
import MemberType from '@components/RecruitMembers/index';
import userIcon from '@assets/icons/userIcon.svg';
import {
  WriterButton,
  PostWrapper,
  PostInfoButton,
  PostText,
  PostTitle,
  TagWrapper,
  DetailWrapper,
  PostDetailWrapper,
  DetailInfo,
  WriterImage,
  WriterName,
  MobileWriterDetailWrapper,
} from './styles';

function PostItem(props: any): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.profileInfo?.user_pk;
  const { content, boardType, detail } = props;
  const [likes, setLikes] = React.useState(content.likes);
  const [likeStatus, setLikeStatus] = React.useState(content.is_like);

  const onHandleWirterProfile = () => {
    alert(`글쓴이의 프로필로 이동`);
  };
  const onHandlePost = () => {
    if (boardType === 'Question') {
      history.push(`/questionBoard/${content.id}`);
    } else if (boardType === 'Free') {
      history.push(`/freeBoard/${content.id}`);
    }
  };
  const onHandleLike = () => {
    if (userId === null) {
      alert('로그인 한 후에 이용가능하십니다!');
      return;
    }
    if (likeStatus) {
      setLikeStatus(false);
      setLikes(likes - 1);
      try {
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
      } catch (error) {
        console.log(error);
      }
    } else {
      setLikeStatus(true);
      setLikes(likes + 1);
      try {
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <PostWrapper>
        <WriterButton onClick={onHandleWirterProfile}>
          <WriterImage src={userIcon} alt='writer-profile' width='15%' />
          <WriterName>{content.user.profile.nickname}</WriterName>
        </WriterButton>

        <PostInfoButton onClick={onHandlePost}>
          <TagWrapper>
            {content.worker.map((workerType: string) => (
              <MemberType key={workerType} member={workerType} />
            ))}
          </TagWrapper>
          <PostTitle>{content.title}</PostTitle>
          {detail ? null : <PostText>{content.content}</PostText>}
        </PostInfoButton>
      </PostWrapper>

      <DetailWrapper>
        <MobileWriterDetailWrapper>
          <WriterImage src={userIcon} alt='writer-profile' width='15%' />
          <WriterName>{content.user.profile.nickname}</WriterName>
        </MobileWriterDetailWrapper>

        <PostDetailWrapper>
          <DateRangeIcon htmlColor='#868686' />
          <DetailInfo>
            {moment(content.create_at).format('YYYY년 MM월 DD일')}
          </DetailInfo>

          <IconButton type='button' onClick={onHandleLike}>
            {!likeStatus && <FavoriteBorderIcon htmlColor='#868686' />}
            {likeStatus && <FavoriteIcon htmlColor='#868686' />}
          </IconButton>
          <DetailInfo>{likes}</DetailInfo>

          <ChatBubbleOutlineIcon htmlColor='#868686' />
          <DetailInfo>{content.comments}</DetailInfo>
        </PostDetailWrapper>
      </DetailWrapper>

      <HorizontalLine width='100%' />
    </div>
  );
}

export default PostItem;
