import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentContainer } from '@assets/styles/page';
import { useDispatch } from 'react-redux';
import { USER_LOGOUT_REQUEST } from '@reducers/actions';
import Footer from '@components/Footer/index';
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

import TeamProfile from './TeamProfile';

const navItem = [
  '내 프로필',
  '팀 프로필',
  '관심있는 글',
  '내가 쓴 글',
  '내가 쓴 댓글',
  '로그아웃',
];

function ProfileDetail(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectMenu, setSelectMenu] = useState(0);

  const handleNavigation = (content: number) => {
    if (content === 5) {
      dispatch({
        type: USER_LOGOUT_REQUEST,
      });
      return history.push('/');
    }
    setSelectMenu(content);
  };
  return (
    <>
      <ContentContainer>
        <Container>
          <LeftContainer>
            {navItem.map((content, index) =>
              selectMenu === index ? (
                // 선택된 메뉴 색상 변경 및 유지
                <ProfileSelectedMenu key={content}>
                  {content}
                </ProfileSelectedMenu>
              ) : (
                <ProfileMenuOption
                  key={content}
                  onClick={() => handleNavigation(index)}
                >
                  {content}
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
      <Footer />
    </>
  );
}

export default ProfileDetail;
