import * as React from 'react';
import { useCallback, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import UserImg from '@assets/images/user.svg';
import CrownImg from '@assets/images/leader-crown.svg';
import StackInput from '@components/StackInput/index';
import { TEAM_PROFILE_REGISTER_REQUEST } from '@reducers/actions';
import {
  TeamProfilePostFormWrapper,
  UploadButtonContainer,
  RegisterButton,
  CancelButton,
  BlockWrapper,
  LeftContainer,
  RightContainer,
  ContentWrapper,
  ProfileImage,
  StyeldTextArea,
  TextCount,
  ButtonWrapper,
  Button,
  StyledInput,
  NotificationText,
  TitleWrapper,
  BoxContainer,
  UserContainer,
} from './styles';

function TeamProfilePostForm(): JSX.Element {
  const dispatch = useDispatch();
  const nickname = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.nickname,
  );
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );

  const [profile, setProfile] = useState<FormData>();
  const [preview, setPreview] = useState('');
  const [title, setTitle] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [stacks, setStacks] = useState([]);

  const handleTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [title],
  );

  const handleChangeIntroduce = useCallback(
    (event) => {
      setIntroduce(event.target.value);
    },
    [introduce],
  );

  const CreateTeamProfile = useCallback(
    (event) => {
      event.preventDefault();

      if (title === '' || introduce === '' || stacks.length === 0) {
        return alert('필수 항목을 작성해 주세요.');
      }

      const profileData = JSON.stringify({
        user: userId,
        title,
        content: introduce,
        status: false,
        stack: stacks,
      });

      // 프로필 사진을 업로드 하지 않는 경우
      if (!profile) {
        const formData = new FormData();
        formData.append('data', profileData);
        dispatch({
          type: TEAM_PROFILE_REGISTER_REQUEST,
          data: formData,
          userId,
        });
      } else {
        // 프로필 사진을 업로드 하는 경우
        profile?.append('data', profileData);
        dispatch({
          type: TEAM_PROFILE_REGISTER_REQUEST,
          data: profile,
          userId,
        });
      }
    },
    [profile, title, introduce, stacks, userId],
  );

  const handleProfileImage = useCallback((event) => {
    const img = event.target.files[0];
    const formData = new FormData();
    formData.append('image', img);
    setProfile(formData);

    const reader = new FileReader();
    reader.readAsDataURL(img);

    reader.onloadend = (finishedEvent: any) => {
      // 미리보기
      if (finishedEvent !== null) {
        setPreview(finishedEvent.currentTarget.result);
      }
    };
  }, []);

  return (
    <TeamProfilePostFormWrapper encType='multipart/form-data'>
      <BlockWrapper>
        <LeftContainer>
          <TitleWrapper>
            <div>팀 프로필</div>
            <div>(선택)</div>
          </TitleWrapper>
        </LeftContainer>
        <RightContainer>
          <ContentWrapper>
            <div>
              {preview ? (
                <ProfileImage src={preview} alt='team profile preview image' />
              ) : (
                <ProfileImage src={UserImg} alt='team profile image' />
              )}

              <NotificationText>png, jpeg 가능</NotificationText>
            </div>
            <UploadButtonContainer>
              <RegisterButton>
                <div>등록</div>
                <input
                  type='file'
                  name='team profile image'
                  accept='image/png, image/jpeg'
                  onChange={handleProfileImage}
                />
              </RegisterButton>
              <CancelButton type='button'>삭제</CancelButton>
            </UploadButtonContainer>
          </ContentWrapper>
        </RightContainer>
      </BlockWrapper>
      <BlockWrapper>
        <LeftContainer>
          <TitleWrapper>
            <div>스터디 명</div>
            <div>(필수)</div>
          </TitleWrapper>
        </LeftContainer>
        <RightContainer>
          <StyledInput
            type='text'
            placeholder='스터디 명을 작성해 주세요.'
            value={title}
            onChange={handleTitle}
          />
        </RightContainer>
      </BlockWrapper>
      <BlockWrapper>
        <LeftContainer>
          <TitleWrapper>
            <div>스터디 소개</div>
            <div>(필수)</div>
          </TitleWrapper>
        </LeftContainer>
        <RightContainer>
          <StyeldTextArea
            placeholder='스터디 소개를 작성해 주세요.'
            cols={30}
            rows={10}
            value={introduce}
            onChange={handleChangeIntroduce}
            maxLength={500}
          />
          <TextCount>{introduce.length}/ 500</TextCount>
        </RightContainer>
      </BlockWrapper>

      <BlockWrapper>
        <LeftContainer>
          <TitleWrapper>
            <div>기술 스택</div>
            <div>(필수)</div>
          </TitleWrapper>
        </LeftContainer>
        <RightContainer>
          <StackInput
            initialStacks={stacks}
            setInitialStacks={setStacks}
            placeHolder='관련 기술 스택을 입력하세요'
          />
        </RightContainer>
      </BlockWrapper>

      <BlockWrapper>
        <LeftContainer>
          <TitleWrapper>
            <div>참여중인</div>
            <div>Get-Iter</div>
          </TitleWrapper>
        </LeftContainer>
        <RightContainer>
          <BoxContainer>
            <UserContainer>
              <img src={CrownImg} alt='leader crown' />
              <span>{nickname}</span>
            </UserContainer>
          </BoxContainer>
        </RightContainer>
      </BlockWrapper>
      <ButtonWrapper>
        <Button type='submit' onClick={CreateTeamProfile}>
          생성하기
        </Button>
      </ButtonWrapper>
    </TeamProfilePostFormWrapper>
  );
}

export default TeamProfilePostForm;
