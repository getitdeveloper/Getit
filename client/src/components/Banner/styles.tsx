import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15rem;
  margin: 0 auto;
  width: 50%;

  @media ${({ theme }) => theme.desktop} {
    width: 70%;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
  }

  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
  @media ${({ theme }) => theme.tablet} {
    margin-left: 1rem;
  }
`;

export const MainText = styled.p`
  width: 100%;
  font-size: 1.813rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

export const SubText = styled.p`
  width: 100%;
  font-family: NotoSansCJKkr;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: ${({ theme }) => theme.colors.main};
`;

export const ImgContainer = styled.div`
  height: 100%;
  @media ${({ theme }) => theme.tablet} {
    margin-right: 1rem;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
