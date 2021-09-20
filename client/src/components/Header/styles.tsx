import styled from 'styled-components';
import LogoImg from '@assets/images/Logo.svg';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 118rem;
  width: 100%;
  height: 4.6rem;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  position: relative;

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
    /* display: initial; */
    flex-direction: column;
    height: auto;
  }

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    margin-top: 1.5rem;
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
    top: 2rem;
  }

  @media ${({ theme }) => theme.mobile} {
    right: 1.3rem;
    top: 1rem;
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
