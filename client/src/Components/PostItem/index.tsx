import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import {
  WriterButton,
  PostContainer,
  PostInfoButton,
  PostText,
  PostTitle,
  TagWrapper,
  PostDetails,
  DetailInfo,
} from './styles';
import MemberType from '../RecruitMembers/index';
import { HorizontalLine } from '../../styles/commons';
import { COMMON_POST_LIKE_SUCCESS } from '../../reducers/actions';

function PostItem(props: any) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = Number(user.id.user_pk);
  const { content, boardType, detail } = props;
  const [likes, setLikes] = React.useState(content.likes);
  const [likeStatus, setLikeStatus] = React.useState(false);

  const onHandleLike = () => {
    if (userId === null) {
      alert('로그인 한 후에 이용가능하십니다!');
      return;
    }
    if (likeStatus) {
      setLikeStatus(false);
      setLikes(likes - 1);
    } else {
      setLikeStatus(true);
      setLikes(likes + 1);
      try {
        dispatch({
          type: COMMON_POST_LIKE_SUCCESS,
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
      <PostContainer>
        {/* <WriterButton
          onClick={() => alert(`${content.writer}의 프로필로 이동`)}
        >
          <img src={content.writerImage} alt='writer-profile' width='15%' />
          <p style={{ fontSize: 'x-small' }}>{content.writer}</p>
        </WriterButton> */}
        <PostInfoButton
          onClick={() => {
            if (boardType === 'Question') {
              history.push('/questionBoard/detail', content.id);
            } else if (boardType === 'Free') {
              history.push('/freeBoard/detail', content.id);
            }
          }}
        >
          {/* <TagWrapper>
            {content.tagType.map((member: string) => (
              <MemberType key={member} member={member} />
            ))}
          </TagWrapper> */}
          <PostTitle>{content.title}</PostTitle>
          {detail ? null : <PostText>{content.content}</PostText>}
        </PostInfoButton>
      </PostContainer>
      <PostDetails>
        <DetailInfo>
          <img src='/icons/calendar.svg' alt='write-date' />
          {moment(content.create_at).format('YYYY년 MM월 DD일')}
        </DetailInfo>
        <DetailInfo>
          <button type='button' onClick={onHandleLike}>
            {!likeStatus && <FavoriteBorderIcon />}
            {likeStatus && <FavoriteIcon />}
          </button>
          {likes}
        </DetailInfo>
        <DetailInfo>
          <ChatBubbleOutlineIcon />
          {content.comments}
        </DetailInfo>
      </PostDetails>
      <HorizontalLine width='100%' />
    </div>
  );
}

export default PostItem;
