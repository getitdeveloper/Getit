import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import {
  TEAM_PROFILE_LIST_REQUEST,
  TEAM_PROFILE_REMOVE_REQUEST,
} from '@reducers/actions';
import {
  TeamProfileCreateButtonWrapper,
  TeamProfileWrapper,
  TeamProfileTitle,
  TeamProfileContent,
  TeamProfileInfo,
  TeamProfileCreated,
  TeamProfileMember,
  MemberIcon,
  RemoveButton,
  RemoveIcon,
  Notification,
} from './styles';

function TeamProfile(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user,
  );
  const teamProfileList = useSelector(
    (state: RootStateOrAny) => state.postList?.teamProfileList,
  );

  const removeStatus = useSelector(
    (state: RootStateOrAny) => state.post?.teamProfileRemoveSuccess,
  );

  useEffect(() => {
    dispatch({
      type: TEAM_PROFILE_LIST_REQUEST,
      data: {
        userId,
      },
    });
  }, [removeStatus]);

  const handleRemove = useCallback((event) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      dispatch({
        type: TEAM_PROFILE_REMOVE_REQUEST,
        data: {
          userId,
          postId: event.currentTarget.id,
        },
      });
    }
  }, []);

  const handleCreateTeamProfile = useCallback(() => {
    if (teamProfileList.length >= 8) {
      return alert('팀 프로필은 최대 8개까지 생성 가능합니다.');
    }
    history.push('/myprofile/teamprofile/form');
  }, [teamProfileList]);

  return (
    <>
      {teamProfileList?.length < 1 && (
        <Notification>팀 프로필을 생성해주세요.</Notification>
      )}
      <Grid container spacing={1}>
        {teamProfileList?.map((profile: any, index: number) => (
          <Grid item xs={12} sm={6} key={`${profile.title}-${index}`}>
            <TeamProfileWrapper>
              {/* 팀프로필 삭제 버튼 */}
              <RemoveButton
                id={profile.id}
                type='button'
                onClick={handleRemove}
              >
                <RemoveIcon />
              </RemoveButton>

              {/* 팀프로필 제목 */}
              <TeamProfileTitle>
                {profile.title.length >= 10
                  ? `${profile.title.substring(0, 10)}...`
                  : profile.title}
              </TeamProfileTitle>

              {/* 팀프로필 내용 */}
              <TeamProfileContent>
                {profile.content.length >= 10
                  ? `${profile.content.substring(0, 10)}...`
                  : profile.content}
              </TeamProfileContent>

              {/* 팀프로필 기타 정보 */}
              <TeamProfileInfo>
                {/* 팀프로필 생성일 */}
                <TeamProfileCreated>
                  {moment(profile.created_at).format('YYYY.MM.DD')}
                </TeamProfileCreated>
                {/* 현재 참여 멤버 */}
                <TeamProfileMember>
                  <MemberIcon />
                  <div>{profile.members.length}</div>
                </TeamProfileMember>
              </TeamProfileInfo>
            </TeamProfileWrapper>
          </Grid>
        ))}
      </Grid>

      <TeamProfileCreateButtonWrapper>
        <button type='button' onClick={handleCreateTeamProfile}>
          팀 프로필 생성하기
        </button>
      </TeamProfileCreateButtonWrapper>
    </>
  );
}

export default TeamProfile;
