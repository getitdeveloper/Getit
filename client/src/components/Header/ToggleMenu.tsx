import * as React from 'react';
import { useState, KeyboardEvent, MouseEvent } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Logo from '@assets/images/Logo.svg';
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

// TODO route 채워넣기 및 로그인시 로그아웃시 다르게 보이도록 수정
const menuList = [
  { text: '홈', icon: <StyledHomeIcon />, route: '/' },
  { text: '내 프로필', icon: <StyledPersonIcon />, route: '/myprofile' },
  { text: '팀 프로필', icon: <StyledGroupIcon />, route: '/' },
  { text: '스터디 모집', icon: <StyledGroupIcon />, route: '/recruitBoard' },
  { text: '질문 게시판', icon: <StyledHelpIcon />, route: '/questionBoard' },
  { text: '자유 게시판', icon: <StyledNoteIcon />, route: '/freeBoard' },
  { text: '관심있는 글', icon: <StyledFavoriteIcon />, route: '/' },
  { text: '내가 쓴 글', icon: <StyledBorderColorIcon />, route: '/' },
  { text: '내가 쓴 댓글', icon: <StyledBorderColorIcon />, route: '/' },
  { text: '알림', icon: <StyledNotificationsIcon />, route: '/' },
  { text: '쪽지', icon: <StyledChatBubbleIcon />, route: '/' },
  { text: '로그아웃', icon: <StyledExitToAppIcon />, route: '/' },
];

export default function ToggleMenu(): JSX.Element {
  const [state, setState] = useState({ left: false });

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
        <ToggleMenuLogo src={Logo} alt='Getit Logo' />

        {/* 메뉴 목록 */}
        {menuList.map((item, index) => (
          <StyledLink key={item.text} to={item.route}>
            <ListItemWrapper key={item.text}>
              <ListItem button key={item.text} className={item.text}>
                <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                <StyledListItemText disableTypography primary={item.text} />
              </ListItem>
              {/* 분리선 */}
              <DividerWrapper>
                {index === 2 || index === 5 ? <StyledDivider /> : null}
              </DividerWrapper>
            </ListItemWrapper>
          </StyledLink>
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
