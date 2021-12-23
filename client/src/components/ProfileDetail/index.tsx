import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentContainer } from '@assets/styles/page';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { MY_PROFILE_SELECT_MENU, USER_LOGOUT_REQUEST } from '@reducers/actions';
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
  const selected = useSelector(
    (state: RootStateOrAny) => state.profile.selectMenu.selected,
  );
  const toggle = useSelector(
    (state: RootStateOrAny) => state.profile.selectMenu.toggle,
  );

  useEffect(() => {
    // 모바일 토글 메뉴가 아닌 일반메뉴에서 오는경우 선택 메뉴 초기화
    if (!toggle) {
      dispatch({
        type: MY_PROFILE_SELECT_MENU,
        data: {
          selected: 0,
        },
      });
    }
  }, []);

  const handleNavigation = useCallback((content: number) => {
    if (content === 5) {
      dispatch({
        type: USER_LOGOUT_REQUEST,
        history,
      });
    }
    dispatch({
      type: MY_PROFILE_SELECT_MENU,
      data: {
        selected: content,
        toggle: false,
      },
    });
  }, []);
  return (
    <>
      <ContentContainer>
        <Container>
          <LeftContainer>
            {navItem.map((content, index) =>
              selected === index ? (
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
            {selected === 0 && <MyProfile />}
            {selected === 1 && <TeamProfile />}
            {selected === 2 && <LikedPosts />}
            {selected === 3 && <MyPosts />}
            {selected === 4 && <MyComments />}
          </RightContainer>
        </Container>
      </ContentContainer>
    </>
  );
}

export default ProfileDetail;
