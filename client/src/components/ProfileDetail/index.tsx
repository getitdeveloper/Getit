import React, { useState } from 'react';
import { ContentContainer } from '@assets/styles/page';
import {
  ProfileMenuOption,
  ProfileSelectedMenu,
  Container,
  LeftContainer,
  RightContainer,
} from './styles';
import MyProfile from './MyProfile';
import MyComments from './MyComments';
import MyPosts from './MyPosts';
import LikedPosts from './LikedPosts';
import { navItem, INavItem } from './types';
import TeamProfile from './TeamProfile';

function ProfileDetail(): JSX.Element {
  const [selectMenu, setSelectMenu] = useState(0);

  const onHandleNavigation = (content: INavItem) => {
    setSelectMenu(content.id);
  };
  return (
    <ContentContainer>
      <Container>
        <LeftContainer>
          {navItem.map((content) =>
            selectMenu === content.id ? (
              // 선택된 메뉴 색상 변경 및 유지
              <ProfileSelectedMenu key={content.id}>
                {content.menu}
              </ProfileSelectedMenu>
            ) : (
              <ProfileMenuOption
                key={content.id}
                onClick={() => onHandleNavigation(content)}
              >
                {content.menu}
              </ProfileMenuOption>
            ),
          )}
        </LeftContainer>

        <RightContainer>
          {selectMenu === 0 && <MyProfile />}
          {selectMenu === 1 && <TeamProfile />}
          {selectMenu === 2 && <LikedPosts />}
          {selectMenu === 3 && <MyPosts />}
          {selectMenu === 4 && <MyComments />}
        </RightContainer>
      </Container>
    </ContentContainer>
  );
}

export default ProfileDetail;
