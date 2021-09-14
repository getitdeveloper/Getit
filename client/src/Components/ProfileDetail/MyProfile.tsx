import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { ProfileRight, InfoContainer, SubTitle, useStyles } from './styles';
import Portfoilo from '../Portfolio';
import Project from '../Project';

function MyProfile() {
  const classes = useStyles();
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );

  return (
    <ProfileRight>
      <InfoContainer>{profileInfo.info}</InfoContainer>
      <SubTitle>기술스택</SubTitle>
      {profileInfo.stack?.map((content: string) => (
        <Chip label={content} key={content} className={classes.chip} />
      ))}
      <SubTitle>포트폴리오</SubTitle>
      <Portfoilo />
      <SubTitle>프로젝트 현황</SubTitle>
      <Project />
      <SubTitle>완료된 프로젝트</SubTitle>
      <Project finished />
    </ProfileRight>
  );
}
export default MyProfile;
