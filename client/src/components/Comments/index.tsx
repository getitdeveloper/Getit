import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  COMMENT_REGISTER_REQUEST,
  COMMENT_LIST_REQUEST,
} from '@reducers/actions';
import { IComment } from '@types';
import { ContentContainer } from '@assets/styles/page';
import UserImg from '@assets/images/user.svg';
import LoadingSpinner from '@components/LoadingSpinner';
import {
  CommentInput,
  Comment,
  SubmitButton,
  WriterImage,
  WriterNickName,
  CommentContent,
  CommentDetail,
  CommentForm,
  NoComments,
  WriterInfo,
  CommentWriterImage,
  MobileWriterImage,
  CreatedTime,
} from './styles';
import { IComments } from './types';

function Comments({ boardId }: IComments): JSX.Element {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );
  const submitStatus = useSelector(
    (state: RootStateOrAny) => state.comment.commentRegisterSuccess,
  );

  const commentList = useSelector(
    (state: RootStateOrAny) => state.commentList.commentList,
  );

  const [newContent, setNewContent] = useState('');
  const [clicked, setClicked] = useState(1);

  useEffect(() => {
    dispatch({
      type: COMMENT_LIST_REQUEST,
      data: {
        board: boardId,
      },
    });
  }, [clicked, submitStatus]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setNewContent(value);
    },
    [newContent],
  );

  const onSubmit = useCallback(() => {
    if (!userId) {
      return alert('로그인이 필요합니다. 로그인 후 이용해 주세요.');
    }

    if (newContent.length > 100) {
      return alert('댓글은 100자까지 작성 가능합니다.');
    }
    const commentData = {
      board: boardId,
      comment: {
        user: userId,
        commonpost: boardId,
        content: newContent,
      },
    };
    setNewContent('');

    dispatch({
      type: COMMENT_REGISTER_REQUEST,
      data: commentData,
    });

    setClicked(clicked * -1);
  }, [userId, boardId, newContent]);

  if (!commentList) {
    return <LoadingSpinner />;
  }

  return (
    <ContentContainer>
      <CommentForm>
        <WriterImage src={UserImg} alt='profile' />
        <CommentInput
          name='content'
          type='text'
          value={newContent}
          onChange={onChange}
        />
        <SubmitButton type='submit' onClick={onSubmit}>
          등록
        </SubmitButton>
      </CommentForm>

      {commentList.length === 0 ? (
        <NoComments>등록된 댓글이 없습니다.</NoComments>
      ) : (
        <>
          {commentList.map((contents: IComment) => (
            <Comment key={contents.create_at}>
              {/* 이미지 */}
              <CommentWriterImage src={UserImg} alt='profile' />
              <CommentDetail>
                {/* 닉네임 / 작성 시간 */}
                <WriterInfo>
                  <MobileWriterImage src={UserImg} alt='profile' />
                  <WriterNickName>
                    {contents.user.profile.nickname}
                  </WriterNickName>
                  <CreatedTime>
                    {moment(`${contents.create_at}`).fromNow()}
                  </CreatedTime>
                </WriterInfo>
                {/* 댓글 내용 */}
                <CommentContent>{contents.content}</CommentContent>
              </CommentDetail>
            </Comment>
          ))}
        </>
      )}
    </ContentContainer>
  );
}

export default Comments;
