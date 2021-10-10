import * as React from 'react';
import { useCallback, useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import UserImg from '@assets/images/user.svg';
import CrownImg from '@assets/images/leader-crown.svg';
import StackInput from '@components/StackInput/index';
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
  const nickname = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.nickname,
  );
  const [introduce, setIntroduce] = useState('');
  const [stacks, setStacks] = useState([]);

  const handleChangeIntroduce = useCallback(
    (event) => {
      setIntroduce(event.target.value);
    },
    [introduce],
  );
  return (
    <TeamProfilePostFormWrapper>
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
              <ProfileImage src={UserImg} alt='team profile image' />
              <NotificationText>png, jpeg 가능</NotificationText>
            </div>
            <UploadButtonContainer>
              <RegisterButton>
                <div>등록</div>
                <input
                  type='file'
                  name='team profile image'
                  accept='image/png, image/jpeg'
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
          <StyledInput type='text' placeholder='스터디 명을 작성해 주세요.' />
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
        <Button type='button'>생성하기</Button>
      </ButtonWrapper>
    </TeamProfilePostFormWrapper>
  );
}

export default TeamProfilePostForm;
