import styled from 'styled-components';
import LogoSvg from '../../assets/images/Logo.svg';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  height: 4.6rem;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;

  @media ${({ theme }) => theme.tablet} {
    width: 100%;
    display: initial;
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
  src: LogoSvg,
})`
  width: 12rem;
  @media ${({ theme }) => theme.tablet} {
    width: 10rem;
    margin: 1.2rem;
  }
`;

export const RightHeaderWrapper = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  @media ${({ theme }) => theme.tablet} {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
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
