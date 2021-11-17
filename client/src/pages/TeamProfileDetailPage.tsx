import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import TeamProfileDetail from '@components/TeamProfileDetail/index';
import { TEAM_PROFILE_POST_DETAIL_REQUEST } from '@reducers/actions';
import { PageWrapper, PageTitle, PageBackground } from '@assets/styles/page';
import { IPostId } from '@types';

function TeamProfileDetailPage(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user,
  );

  const teamProfilePostDetail = useSelector(
    (state: RootStateOrAny) => state.post.teamProfilePostDetail,
  );

  useEffect(() => {
    dispatch({
      type: TEAM_PROFILE_POST_DETAIL_REQUEST,
      data: { userId, postId },
    });
  }, []);

  return (
    <PageBackground>
      <PageWrapper>
        <PageTitle>팀 프로필</PageTitle>
        <TeamProfileDetail data={teamProfilePostDetail} />
      </PageWrapper>
    </PageBackground>
  );
}

export default TeamProfileDetailPage;
