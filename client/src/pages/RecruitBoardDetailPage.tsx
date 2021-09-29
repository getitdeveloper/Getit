import * as React from 'react';
import { RECRUIT_POST_REQUEST } from '@reducers/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@components/LoadingSpinner';

function RecruitBoardDetailPage(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: { postId: string } = useParams();
  const recruitPostDetail = useSelector(
    (state: RootStateOrAny) => state.board.recruitPostDetail,
  );

  useEffect(() => {
    dispatch({
      type: RECRUIT_POST_REQUEST,
      data: postId,
    });
  }, []);

  if (!recruitPostDetail) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {/* TODO 수정중 */}
      <div>디테일 페이지</div>
      <h1>{recruitPostDetail.title}</h1>
      <p>{recruitPostDetail.content}</p>
    </div>
  );
}

export default RecruitBoardDetailPage;
