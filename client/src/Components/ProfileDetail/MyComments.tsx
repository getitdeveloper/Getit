import * as React from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MY_COMMENT_REQUEST } from '../../reducers/actions';
import {
  ProfileRight,
  CommentWrapper,
  CommentDetailWrapper,
  GoBoardButton,
} from './styles';

function MyComments() {
  const userId = useSelector((state: RootStateOrAny) => state.user.id.user_pk);
  const myComments = useSelector(
    (state: RootStateOrAny) => state.comment.MyComment,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: MY_COMMENT_REQUEST,
      data: {
        user: userId,
      },
    });
  }, []);

  if (!myComments) {
    return <CircularProgress />;
  }
  return (
    <ProfileRight>
      {myComments.map((content: any) => (
        <CommentWrapper key={content.create_at}>
          <CommentDetailWrapper>
            <p>{content.content}</p>
            <p>{moment(`${content.create_at}`).fromNow()}</p>
          </CommentDetailWrapper>

          <GoBoardButton type='button'>게시물로 가기</GoBoardButton>
        </CommentWrapper>
      ))}
    </ProfileRight>
  );
}
export default MyComments;
