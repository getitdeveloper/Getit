import React, { useState, useCallback, KeyboardEvent, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LogoImg from '@assets/images/Logo.svg';
import { MY_PROFILE_SELECT_MENU, USER_LOGOUT_REQUEST } from '@reducers/actions';

import {
  StyledLink,
  MenuWrapper,
  ListItemWrapper,
  DividerWrapper,
  ToggleMenuWrapper,
  StyledMenuIcon,
  ToggleMenuLogo,
  StyledListItemIcon,
  StyledHomeIcon,
  StyledPersonIcon,
  StyledGroupIcon,
  StyledHelpIcon,
  StyledNoteIcon,
  StyledFavoriteIcon,
  StyledBorderColorIcon,
  StyledNotificationsIcon,
  StyledChatBubbleIcon,
  StyledExitToAppIcon,
  StyledListItemText,
  StyledDivider,
} from './styles';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const menuList = [
  { text: '홈', icon: <StyledHomeIcon />, route: '/' },
  { text: '내 프로필', icon: <StyledPersonIcon />, route: '/myprofile' },
  { text: '팀 프로필', icon: <StyledGroupIcon />, route: '/myprofile' },
  { text: '스터디 모집', icon: <StyledGroupIcon />, route: '/recruitBoard' },
  { text: '질문 게시판', icon: <StyledHelpIcon />, route: '/questionBoard' },
  { text: '자유 게시판', icon: <StyledNoteIcon />, route: '/freeBoard' },
  { text: '관심있는 글', icon: <StyledFavoriteIcon />, route: '/myprofile' },
  { text: '내가 쓴 글', icon: <StyledBorderColorIcon />, route: '/myprofile' },
  {
    text: '내가 쓴 댓글',
    icon: <StyledBorderColorIcon />,
    route: '/myprofile',
  },
  { text: '알림', icon: <StyledNotificationsIcon />, route: '/' },
  { text: '쪽지', icon: <StyledChatBubbleIcon />, route: '/' },
  { text: '로그인', icon: <StyledExitToAppIcon />, route: '/' },
];

export default function ToggleMenu(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const nickname = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.nickname,
  );

  const [state, setState] = useState({ left: false });

  const handleSelectMenu = useCallback((selectMenu) => {
    switch (selectMenu) {
      case '내 프로필':
        dispatch({
          type: MY_PROFILE_SELECT_MENU,
          data: {
            selected: 0,
            toggle: true,
          },
        });
        break;
      case '팀 프로필':
        dispatch({
          type: MY_PROFILE_SELECT_MENU,
          data: {
            selected: 1,
            toggle: true,
          },
        });
        break;
      case '관심있는 글':
        dispatch({
          type: MY_PROFILE_SELECT_MENU,
          data: {
            selected: 2,
            toggle: true,
          },
        });
        break;
      case '내가 쓴 글':
        dispatch({
          type: MY_PROFILE_SELECT_MENU,
          data: {
            selected: 3,
            toggle: true,
          },
        });
        break;
      case '내가 쓴 댓글':
        dispatch({
          type: MY_PROFILE_SELECT_MENU,
          data: {
            selected: 4,
            toggle: true,
          },
        });
        break;
      default:
        break;
    }
  }, []);

  const handleLogOut = useCallback(() => {
    dispatch({
      type: USER_LOGOUT_REQUEST,
      history,
    });
  }, []);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const Menu = (anchor: Anchor) => (
    <MenuWrapper
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* 로고 */}
        <ToggleMenuLogo src={LogoImg} alt='Getit Logo' />

        {/* 메뉴 목록 */}
        {menuList.map((item, index) => (
          <div key={item.text}>
            {nickname && menuList.length - 1 === index ? (
              // 메뉴 목록 중 로그인부분 로그인시 로그아웃으로 보여주기
              <StyledLink key={item.text} to='/' onClick={handleLogOut}>
                <ListItemWrapper key={item.text}>
                  <ListItem button key={item.text} className={item.text}>
                    <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                    <StyledListItemText disableTypography primary='로그아웃' />
                  </ListItem>
                  {/* 분리선 */}
                  <DividerWrapper>
                    {index === 2 || index === 5 ? <StyledDivider /> : null}
                  </DividerWrapper>
                </ListItemWrapper>
              </StyledLink>
            ) : (
              // 메뉴 목록 중 로그인부분 미로그인시 로그인으로 보여주기
              <StyledLink key={item.text} to={item.route}>
                <ListItemWrapper key={item.text}>
                  <ListItem
                    button
                    key={item.text}
                    className={item.text}
                    onClick={() => handleSelectMenu(item.text)}
                  >
                    <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                    <StyledListItemText disableTypography primary={item.text} />
                  </ListItem>
                  {/* 분리선 */}
                  <DividerWrapper>
                    {index === 2 || index === 5 ? <StyledDivider /> : null}
                  </DividerWrapper>
                </ListItemWrapper>
              </StyledLink>
            )}
          </div>
        ))}
      </List>
    </MenuWrapper>
  );

  return (
    <ToggleMenuWrapper>
      <Button onClick={toggleDrawer('left', true)}>
        <StyledMenuIcon />
      </Button>
      <SwipeableDrawer
        anchor='left'
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {Menu('left')}
      </SwipeableDrawer>
    </ToggleMenuWrapper>
  );
}
