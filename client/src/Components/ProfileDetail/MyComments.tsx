import * as React from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { MY_COMMENT_REQUEST } from '../../reducers/actions';
import {
  ProfileRight,
  SubTitle,
  CommentWrapper,
  CommentDetailWrapper,
  GoBoardButton,
} from './styles';
import { IComment } from '../../types';
import LoadingSpinner from '../LoadingSpinner';

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
    return <LoadingSpinner />;
  }
  return (
    <ProfileRight>
      <p>내가 쓴 댓글</p>
      {myComments.map((content: IComment) => (
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
