import styled, { css } from 'styled-components';
import LogoImg from '@assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import HelpIcon from '@material-ui/icons/Help';
import NoteIcon from '@material-ui/icons/Note';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export const HeaderWrapper = styled.div`
  border-bottom: ${(props) =>
    props.className === '/' ? null : '1px solid #b7b7b7'};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 118rem;
  width: 100%;
  height: 4.6rem;
  margin: 0 auto;
  margin-top: ${(props) => (props.className === '/' ? '3rem' : '0.4rem')};
  margin-bottom: ${(props) => (props.className === '/' ? '3rem' : '0.4rem')};
  position: relative;

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
    /* display: initial; */
    flex-direction: column;
    height: auto;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

export const LeftHeaderWrapper = styled.div`
  display: inline-block;
  position: absolute;
  left: 0;

  @media ${({ theme }) => theme.tablet} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: static;
  }
`;

export const Logo = styled.img.attrs({
  alt: 'getit logo',
  src: LogoImg,
})`
  width: 12rem;
  margin-left: 2rem;
  cursor: pointer;
  @media ${({ theme }) => theme.tablet} {
    width: 10rem;
    margin: 1.2rem;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 8rem;
  }
`;

export const RightHeaderWrapper = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  margin-right: 2rem;

  @media ${({ theme }) => theme.tablet} {
    right: 2rem;
    top: 1.6rem;
    margin-right: 1rem;
  }

  @media ${({ theme }) => theme.mobile} {
    right: 1.3rem;
    top: 1.3rem;
    margin-right: 0.6rem;
  }
`;

export const LoginButton = styled.button`
  padding: 0.5rem 1.063rem;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.main};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  font-size: 1.5rem;
  border-style: none;
  cursor: pointer;
`;

// Navigation Bar Styles
export const Nav = styled.ul`
  display: flex;
  margin: 0 auto;
  align-items: center;

  /* searchBar */
  li:nth-child(1) {
    width: 36.75rem;
  }
  /* searchBar를 제외한 나머지 메뉴 */
  li {
    font-size: 1.6rem;
    padding: 0 0.8rem;
    margin: 0 1rem;
  }

  @media ${({ theme }) => theme.tablet} {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

// Toggle Menu Styles
export const ToggleMenuWrapper = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0.5rem;

  @media ${({ theme }) => theme.tablet} {
    display: block;
  }
`;

export const MenuWrapper = styled.div`
  min-width: 28rem;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  && {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const ToggleMenuLogo = styled.img`
  width: 10rem;
  margin: 2.5rem 2.5rem;
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  && {
    min-width: 0;
    margin-right: 1.5rem;
  }
`;

const IconMixin = css`
  && {
    font-size: 3rem;
  }
`;

export const StyledHomeIcon = styled(HomeIcon)`
  ${IconMixin}
`;
export const StyledPersonIcon = styled(PersonIcon)`
  ${IconMixin}
`;
export const StyledGroupIcon = styled(GroupIcon)`
  ${IconMixin}
`;
export const StyledHelpIcon = styled(HelpIcon)`
  ${IconMixin}
`;
export const StyledNoteIcon = styled(NoteIcon)`
  ${IconMixin}
`;
export const StyledFavoriteIcon = styled(FavoriteIcon)`
  ${IconMixin}
`;
export const StyledBorderColorIcon = styled(BorderColorIcon)`
  ${IconMixin}
`;
export const StyledNotificationsIcon = styled(NotificationsIcon)`
  ${IconMixin}
`;
export const StyledChatBubbleIcon = styled(ChatBubbleIcon)`
  ${IconMixin}
`;
export const StyledExitToAppIcon = styled(ExitToAppIcon)`
  ${IconMixin}
`;

export const StyledListItemText = styled(ListItemText)`
  && {
    font-size: 1.6rem;
  }
`;

export const StyledDivider = styled(Divider)`
  width: 90%;
`;

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HoverColorMixin = css`
  color: ${({ theme }) => theme.colors.main};
`;

export const ListItemWrapper = styled.div`
  &:hover {
    ${HoverColorMixin}

    ${StyledHomeIcon} {
      ${HoverColorMixin}
    }

    ${StyledPersonIcon} {
      ${HoverColorMixin}
    }

    ${StyledGroupIcon} {
      ${HoverColorMixin}
    }

    ${StyledHelpIcon} {
      ${HoverColorMixin}
    }
    ${StyledNoteIcon} {
      ${HoverColorMixin}
    }

    ${StyledFavoriteIcon} {
      ${HoverColorMixin}
    }

    ${StyledBorderColorIcon} {
      ${HoverColorMixin}
    }

    ${StyledNotificationsIcon} {
      ${HoverColorMixin}
    }

    ${StyledChatBubbleIcon} {
      ${HoverColorMixin}
    }

    ${StyledExitToAppIcon} {
      ${HoverColorMixin}
    }
  }
`;
