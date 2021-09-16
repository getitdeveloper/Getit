import * as React from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { COMMENT_REGISTER_REQUEST, COMMENT_REQUEST } from '@reducers/actions';
import { PageContainer } from '@assets/styles/page';
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
} from './styles';

function Comments(props: any) {
  const { boardId } = props;
  const dispatch = useDispatch();
  const [content, setContent] = React.useState('');
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = Number(user.id.user_pk);
  const commentList = useSelector(
    (state: RootStateOrAny) => state.comment.commentList,
  );
  const [clicked, setClicked] = React.useState(1);

  React.useEffect(() => {
    dispatch({
      type: COMMENT_REQUEST,
      data: {
        board: boardId,
      },
    });
  }, [clicked]);

  if (!commentList) {
    return <CircularProgress />;
  }

  const onChange = (e: any) => {
    const { value } = e.target;
    setContent(value);
  };

  const onSubmit = (contentText: string) => {
    const commentData = {
      board: boardId,
      comment: {
        user: userId,
        commonpost: boardId,
        content: contentText,
      },
    };
    setContent('');
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

  return (
    <PageContainer width='80%'>
      <CommentForm>
        <WriterImage src='/icons/user.svg' alt='profile' />
        <CommentInput
          name='content'
          type='text'
          width='100%'
          value={content}
          onChange={onChange}
        />
        <SubmitButton type='submit' onClick={() => onSubmit(content)}>
          등록
        </SubmitButton>
      </CommentForm>

      {commentList.length === 0 ? (
        <NoComments>등록된 댓글이 없습니다!</NoComments>
      ) : (
        <CommentWrapper>
          {commentList.map((contents: any) => (
            <Comment key={contents.key}>
              <WriterImage src='/icons/user.svg' alt='profile' />
              <CommentDetail>
                <WriterNickName>
                  {contents.user.profile.nickname}
                </WriterNickName>
                <CommentContent>{contents.content}</CommentContent>
                {/* <p>{contents.create_at}</p> */}
              </CommentDetail>
            </Comment>
          ))}
        </CommentWrapper>
      )}
    </PageContainer>
  );
}

export default Comments;
