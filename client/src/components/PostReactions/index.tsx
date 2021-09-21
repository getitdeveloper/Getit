import * as React from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
  ReactionFieldWrapper,
  ReactionWrapper,
  MessageButton,
  LikeButton,
} from './styles';

function PostReactions(): JSX.Element {
  const [likeStatus, setLikeStatus] = React.useState(false);

  return (
    <ReactionFieldWrapper>
      <ReactionWrapper>
        <MessageButton>
          <ChatBubbleOutlineIcon htmlColor='#fff' />
        </MessageButton>
        쪽지보내기
      </ReactionWrapper>
      <ReactionWrapper>
        <LikeButton type='button'>
          {!likeStatus && <FavoriteBorderIcon htmlColor='#fff' />}
          {likeStatus && <FavoriteIcon htmlColor='#fff' />}
        </LikeButton>
        좋아요
      </ReactionWrapper>
    </ReactionFieldWrapper>
  );
}

export default PostReactions;
