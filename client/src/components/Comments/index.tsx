import * as React from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  COMMENT_REGISTER_REQUEST,
  COMMENT_LIST_REQUEST,
} from '@reducers/actions';
import { IComment } from '@types';
import { PageContainer } from '@assets/styles/page';
import UserIcon from '@assets/icons/user.svg';
import LoadingSpinner from '@components/LoadingSpinner';
import {
  CommentWrapper,
  CommentInput,
  Comment,
  SubmitButton,
  WriterImage,
  WriterNickName,
  CommentContent,
  CommentDetail,
  CommentForm,
  NoComments,
  CommentDetailWrapper,
  CreatedTime,
} from './styles';

function Comments(props: any) {
  const { boardId } = props;
  const dispatch = useDispatch();
  const [newContent, setNewContent] = React.useState('');
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.profileInfo?.user_pk;
  const commentList = useSelector(
    (state: RootStateOrAny) => state.commentList.commentList,
  );
  const [clicked, setClicked] = React.useState(1);

  React.useEffect(() => {
    dispatch({
      type: COMMENT_LIST_REQUEST,
      data: {
        board: boardId,
      },
    });
  }, [clicked]);

  const onChange = (e: any) => {
    const { value } = e.target;
    setNewContent(value);
  };

  const onSubmit = () => {
    if (!userId) {
      return alert('로그인 한 후에 이용가능하십니다!');
    }
    const commentData = {
      board: boardId,
      comment: {
        user: Number(userId),
        commonpost: boardId,
        content: newContent,
      },
    };
    setNewContent('');
    try {
      dispatch({
        type: COMMENT_REGISTER_REQUEST,
        data: commentData,
      });
    } catch (error) {
      console.log(error);
    }
    setClicked(clicked * -1);
  };

  if (!commentList) {
    return <LoadingSpinner />;
  }

  return (
    <PageContainer width='80%'>
      <CommentForm>
        <WriterImage src={UserIcon} alt='profile' />
        <CommentInput
          name='content'
          type='text'
          width='100%'
          value={newContent}
          onChange={onChange}
        />
        <SubmitButton type='submit' onClick={onSubmit}>
          등록
        </SubmitButton>
      </CommentForm>

      {commentList.length === 0 ? (
        <NoComments>등록된 댓글이 없습니다!</NoComments>
      ) : (
        <CommentWrapper>
          {commentList.map((contents: IComment) => (
            <Comment key={contents.create_at}>
              <WriterImage src={UserIcon} alt='profile' />
              <CommentDetailWrapper>
                <CommentDetail>
                  <WriterNickName>
                    {contents.user.profile.nickname}
                  </WriterNickName>
                  <CreatedTime>
                    {moment(`${contents.create_at}`).fromNow()}
                  </CreatedTime>

                  {/* <p>{contents.create_at}</p> */}
                </CommentDetail>
                <CommentContent>{contents.content}</CommentContent>
              </CommentDetailWrapper>
            </Comment>
          ))}
        </CommentWrapper>
      )}
    </PageContainer>
  );
}

export default Comments;
