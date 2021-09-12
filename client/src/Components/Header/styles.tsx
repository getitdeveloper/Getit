import styled from 'styled-components';
import LogoSvg from '../../assets/images/Logo.svg';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const Logo = styled.img.attrs({
  alt: 'getit logo',
  src: LogoSvg,
})`
  width: 12rem;
`;

export const LoginButton = styled.button`
  padding: 0.5rem 1.063rem;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.main};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  font-size: 1.5rem;
`;
