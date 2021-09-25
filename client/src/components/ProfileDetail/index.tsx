import * as React from 'react';
import { useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import UserImg from '@assets/icons/user.svg';
import {
  SplittedPageContainer,
  ContentContainer,
  ProfileLeft,
  ProfileImage,
  MainProfile,
  ProfileNavItem,
} from './styles';
import MyProfile from './MyProfile';
import MyComments from './MyComments';
import MyPosts from './MyPosts';
import { navItem } from './navTypes';

function ProfileDetail(): JSX.Element {
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const [selectMenu, setSelectMenu] = useState(0);

  const onHandleNavigation = (content: any) => {
    // todo click한 메뉴 색 바꾸기
    setSelectMenu(content.id);
  };
  return (
    <SplittedPageContainer>
      <ProfileLeft>
        <MainProfile>
          <ProfileImage src={UserImg} alt='profileImage' />
          {/* {profileDummyData.img ? (
            <ProfileImage src={profileDummyData.img} alt='profileImage' />
          ) : (
            
          )} */}
          <ContentContainer>닉네임 {profileInfo.nickname}</ContentContainer>
          <ContentContainer>이메일 {profileInfo.email}</ContentContainer>
          <ContentContainer> 직업 {profileInfo.job} </ContentContainer>
        </MainProfile>
        <hr
          style={{
            border: '1px solid #e4e4e4',
            width: '100%',
            marginTop: '30%',
            marginBottom: '15%',
          }}
        />
        {navItem.map((content) => (
          <ProfileNavItem
            key={content.menu}
            onClick={() => onHandleNavigation(content)}
          >
            {content.menu}
          </ProfileNavItem>
        ))}
      </ProfileLeft>
      <hr
        style={{
          borderTop: '1px solid #e4e4e4',
          height: 'auto',
        }}
      />
      {selectMenu === 0 && <MyProfile />}
      {selectMenu === 2 && <MyComments />}
      {selectMenu === 3 && <MyPosts />}
    </SplittedPageContainer>
  );
}

export default ProfileDetail;
