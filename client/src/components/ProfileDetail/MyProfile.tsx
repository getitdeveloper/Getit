import React, { useState, useCallback } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { USER_PROFILE_EDIT_REQUEST } from '@reducers/actions';
import UserImg from '@assets/images/user.svg';
import { HorizontalLine } from '@assets/styles/commons';
import StackInput from '@components/StackInput';
import LoadingSpinner from '@components/LoadingSpinner';
import Portfoilo from '@components/Portfolio';
import Project from '@components/Project';
import { IUpdatedProfileInfo } from '@types';
import {
  MainProfile,
  ProfileWrapper,
  ButtonWrapper,
  ProfileImage,
  PersonalInfo,
  PersonalInfoWrapper,
  ProfileRight,
  IntroWrapper,
  SubTitleWrapper,
  SubmitButton,
  BoundaryText,
} from './styles';

function MyProfile(): JSX.Element {
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const portfolios = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.portfolios,
  );
  const teamprofiles = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.teamprofiles,
  );
  const dispatch = useDispatch();
  const [intro, setIntro] = useState(profileInfo.info);
  const [editedNickname, setNickname] = useState(profileInfo.nickname);
  const [editedEmail, setEmail] = useState(profileInfo.email);
  const [editedJob, setJob] = useState(profileInfo.job);
  const [editedStacks, setStacks] = useState(profileInfo.stack);

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nickname':
        setNickname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'job':
        setJob(value);
        break;
      case 'intro':
        setIntro(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = useCallback(() => {
    if (
      intro === '' ||
      editedNickname === '' ||
      editedEmail === '' ||
      editedJob === ''
    ) {
      return alert('?????????, ?????????, ??????, ???????????? ????????? ????????? ??? ????????????!');
    }
    const updatedProfileInfo: IUpdatedProfileInfo = {
      user: profileInfo.user,
      user_pk: profileInfo.user_pk,
      nickname: editedNickname,
      job: editedJob,
      level: '',
      email: editedEmail,
      info: intro,
      git: profileInfo.git,
      stack: editedStacks,
    };

    dispatch({
      type: USER_PROFILE_EDIT_REQUEST,
      data: {
        updatedProfile: updatedProfileInfo,
        user_pk: String(profileInfo.user_pk),
      },
    });
  }, [
    intro,
    editedNickname,
    editedEmail,
    editedJob,
    editedStacks,
    profileInfo,
  ]);

  if (!portfolios) {
    return <LoadingSpinner />;
  }

  return (
    <ProfileRight>
      <MainProfile>
        <ProfileWrapper>
          <ProfileImage src={UserImg} alt='profileImage' />
          <ButtonWrapper>
            <button type='submit'>??????</button>
            <button type='submit'>??????</button>
          </ButtonWrapper>
        </ProfileWrapper>
        <PersonalInfoWrapper>
          <PersonalInfo>
            <div>
              <label htmlFor='nickname'>?????????</label>
              <input
                id='nickname'
                name='nickname'
                value={editedNickname}
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor='nickname'>?????????</label>
              <input name='email' value={editedEmail} onChange={onChange} />
            </div>
            <div>
              <label htmlFor='nickname'>??????</label>
              <input name='job' value={editedJob} onChange={onChange} />
            </div>
          </PersonalInfo>
        </PersonalInfoWrapper>
      </MainProfile>

      <div>
        <IntroWrapper name='intro' value={intro} onChange={onChange} />
      </div>
      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <BoundaryText>????????????</BoundaryText>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>

      <StackInput initialStacks={editedStacks} setInitialStacks={setStacks} />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <BoundaryText>???????????????</BoundaryText>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      {portfolios && <Portfoilo portfolioList={portfolios} />}

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <BoundaryText>???????????? ??????</BoundaryText>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      <Project teamprofiles={teamprofiles} proceeding='proceeding' />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <BoundaryText>?????? ????????????</BoundaryText>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      <Project teamprofiles={teamprofiles} finished='finished' />

      <SubmitButton type='button' onClick={onSubmit}>
        ????????????
      </SubmitButton>
    </ProfileRight>
  );
}
export default MyProfile;
