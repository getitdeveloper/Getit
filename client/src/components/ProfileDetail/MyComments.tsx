import * as React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { MY_COMMENT_REQUEST } from '@reducers/actions';
import { IconButton } from '@assets/styles/commons';
import { IComment } from '@types';
import LoadingSpinner from '@components/LoadingSpinner';
import {
  ProfileRight,
  CommentWrapper,
  CommentDetailWrapper,
  CommentDate,
} from './styles';

function MyComments() {
  const userId = useSelector((state: RootStateOrAny) => state.user.id.user_pk);
  const myComments = useSelector(
    (state: RootStateOrAny) => state.comment.myComment,
  );
  const dispatch = useDispatch();
  const initialCreatedDate: string[] = [];
  const [createdDate, setCreatedDate] = useState(initialCreatedDate);
  const [hideDate, setHideDate] = useState(true);

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
      {myComments.map((content: IComment) => (
        <div key={content.create_at}>
          <CommentDate>
            {moment(`${content.create_at}`).format('YYYY.MM.DD')}
          </CommentDate>
          <CommentWrapper>
            <CommentDetailWrapper>
              <p>{content.content}</p>
              <p>{moment(`${content.create_at}`).fromNow()}</p>
            </CommentDetailWrapper>

            <IconButton>
              <NavigateNextIcon htmlColor='#707070' />
            </IconButton>
          </CommentWrapper>
        </div>
      ))}
    </ProfileRight>
  );
}
export default MyComments;
