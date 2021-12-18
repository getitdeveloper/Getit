import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import moment from 'moment';
import 'moment/locale/ko';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { MY_COMMENT_LIST_REQUEST } from '@reducers/actions';
import { IconButton } from '@assets/styles/commons';
import { IComment } from '@types';
import LoadingSpinner from '@components/LoadingSpinner';
import {
  ProfileRight,
  CommentWrapper,
  CommentDetailWrapper,
  CommentDate,
  CommentInfo,
  CommentText,
} from './styles';

function getOrderedComments(comments: any) {
  const created: Map<string, Array<undefined>> = new Map();
  comments.forEach((content: any) => {
    const createdTime: string = moment(`${content.create_at}`).format(
      'YYYY.MM.DD',
    );
    if (created.has(createdTime)) {
      created.get(createdTime)?.push(content);
    } else {
      created.set(createdTime, [content]);
    }
  });
  return Array.from(created);
}

function MyComments(): JSX.Element {
  const history = useHistory();
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.profileInfo?.user_pk;
  const myComments = useSelector(
    (state: RootStateOrAny) => state.commentList.myCommentList,
  );
  const dispatch = useDispatch();
  const Workers: string[] = ['개발자', '기획자', '디자이너'];

  useEffect(() => {
    dispatch({
      type: MY_COMMENT_LIST_REQUEST,
      data: {
        user: userId,
      },
    });
  }, []);

  if (!myComments) {
    return <LoadingSpinner />;
  }

  const comments = getOrderedComments(myComments);
  if (!comments) {
    return <LoadingSpinner />;
  }

  const onHandlePost = (postId: number, category: string) =>
    history.push(`/${category}Board/${postId}`);

  return (
    <ProfileRight>
      {comments.map((comment: any) => (
        <div key={comment[0]}>
          <CommentDate>
            {moment(`${comment[0]}`).format('YYYY.MM.DD')}
          </CommentDate>
          {comment[1].map((content: any) => (
            <CommentWrapper key={content.id}>
              <CommentDetailWrapper>
                <CommentInfo>
                  {content.commonpost.category === 'question' ? (
                    <p>질문게시판 </p>
                  ) : (
                    <p>자유게시판 </p>
                  )}
                  {content.commonpost.worker.map((workerId: number) => (
                    <p key={workerId}> / {Workers[workerId - 1]} </p>
                  ))}
                  <p> / {content.commonpost.title}</p>
                </CommentInfo>
                <CommentText>{content.content}</CommentText>
              </CommentDetailWrapper>

              <IconButton
                onClick={() =>
                  onHandlePost(
                    content.commonpost.id,
                    content.commonpost.category,
                  )
                }
              >
                <NavigateNextIcon htmlColor='#707070' />
              </IconButton>
            </CommentWrapper>
          ))}
        </div>
      ))}
    </ProfileRight>
  );
}
export default MyComments;
