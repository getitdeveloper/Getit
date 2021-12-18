import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectWrapper, ProjectContent, None } from './styles';
import { IProject } from './types';

function Project({
  teamprofiles,
  proceeding,
  finished,
}: IProject): JSX.Element {
  // 프로젝트 현황(진행중인 프로젝트)
  if (proceeding) {
    // 프로젝트 상태가 false가 하나라도 있는지 없는지 체크해서 화면 렌더링 결정
    const found = teamprofiles.find((profile) => profile.status === false);
    return (
      <>
        {found ? (
          <ProjectWrapper>
            {teamprofiles.map(
              (profile) =>
                profile.status === false && (
                  <Link
                    key={profile.title}
                    to={`/myprofile/teamprofile/${profile.id}`}
                  >
                    <ProjectContent>{profile.title}</ProjectContent>
                  </Link>
                ),
            )}
          </ProjectWrapper>
        ) : (
          <None>진행중인 프로젝트가 없습니다.</None>
        )}
      </>
    );
  }
  // 프로젝트 현황(완료된 프로젝트)
  if (finished) {
    // 프로젝트 상태가 true가 하나라도 있는지 없는지 체크해서 화면 렌더링 결정
    const found = teamprofiles.find((profile) => profile.status === true);
    return (
      <>
        {found ? (
          <ProjectWrapper>
            {teamprofiles.map(
              (profile) =>
                profile.status === true && (
                  <Link
                    key={profile.title}
                    to={`/myprofile/teamprofile/${profile.id}`}
                  >
                    <ProjectContent>{profile.title}</ProjectContent>
                  </Link>
                ),
            )}
          </ProjectWrapper>
        ) : (
          <None>완료된 프로젝트가 없습니다.</None>
        )}
      </>
    );
  }
  return <div />;
}

Project.defaultProps = {
  proceeding: '',
  finished: '',
};
export default Project;
