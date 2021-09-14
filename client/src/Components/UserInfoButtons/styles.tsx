import styled from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 1.5rem;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    margin: 0 0.5rem;
    padding: 0.3rem 0.5rem;
    border-style: none;
    background-color: #e0e0e0;
    border-radius: 50%;
  }
`;

export const StyledPersonIcon = styled(PersonIcon)`
  color: #868686;
  font-size: 2.5rem;
`;

export const StyledNotificationsIcon = styled(NotificationsIcon)`
  color: #868686;
  font-size: 2.5rem;
`;
