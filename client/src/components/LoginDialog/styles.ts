import styled from 'styled-components';
import { DialogTitle, IconButton } from '@material-ui/core';

export const IconButtonContainer = styled(IconButton)`
  align-self: flex-end;
  padding: 2rem;
`;

export const Title = styled(DialogTitle)`
  font-size: 1.8rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  text-align: center;
  color: #000000;
`;

export const SocialLoginWrapper = styled.div`
  max-width: 32rem;
  width: 100%;
  margin: 1.5rem 0 3rem;
  background-color: #ffffff;
`;
