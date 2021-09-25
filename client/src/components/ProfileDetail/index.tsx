import * as React from 'react';
import { useState } from 'react';
import {
  ProfileMenuOption,
  ProfileSelectedMenu,
  SplittedPageContainer,
  ProfileLeft,
  VerticalLine,
} from './styles';
import MyProfile from './MyProfile';
import MyComments from './MyComments';
import MyPosts from './MyPosts';
import { navItem } from './types';

function ProfileDetail(): JSX.Element {
  const [selectMenu, setSelectMenu] = useState(0);

  const onHandleNavigation = (content: any) => {
    setSelectMenu(content.id);
  };
  return (
    <SplittedPageContainer>
      <ProfileLeft>
        {navItem.map((content) =>
          selectMenu === content.id ? (
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
      </ProfileLeft>

      <VerticalLine />

      {selectMenu === 0 && <MyProfile />}
      {selectMenu === 3 && <MyPosts />}
      {selectMenu === 4 && <MyComments />}
    </SplittedPageContainer>
  );
}

export default ProfileDetail;
