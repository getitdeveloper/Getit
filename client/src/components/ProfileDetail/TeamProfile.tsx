import { TEAM_PROFILE_LIST_REQUEST } from '@reducers/actions';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import {
  TeamProfileCreateButton,
  TeamProfileWrapper,
  TeamProfileTitle,
  TeamProfileContent,
  TeamProfileInfo,
  TeamProfileCreated,
  TeamProfileMember,
  MemberIcon,
  RemoveButton,
  RemoveIcon,
} from './styles';

function TeamProfile(): JSX.Element {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user,
  );
  const teamProfileList = useSelector(
    (state: RootStateOrAny) => state.postList?.teamProfileList,
  );

  useEffect(() => {
    dispatch({
      type: TEAM_PROFILE_LIST_REQUEST,
      data: {
        userId,
      },
    });
  }, []);

  const handleRemove = useCallback((event) => {
    console.log(event.currentTarget.name);
  }, []);
  return (
    <>
      <Grid container spacing={1}>
        {teamProfileList?.map((profile: any, index: number) => (
          <Grid item xs={12} sm={6} key={`${profile.title}-${index}`}>
            <TeamProfileWrapper>
              {/* 팀프로필 삭제 버튼 */}
              <RemoveButton
                name={profile.id}
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

      <TeamProfileCreateButton>
        <Link to='/myprofile/teamprofile/form'>
          <button type='button'>팀 프로필 생성하기</button>
        </Link>
      </TeamProfileCreateButton>
    </>
  );
}

export default TeamProfile;
