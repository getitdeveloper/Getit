import * as React from 'react';
import bannerImg from '@assets/images/Banner.svg';
import {
  BannerWrapper,
  TextWrapper,
  MainText,
  SubText,
  ImgContainer,
  BannerImg,
} from './styles';

function Banner(): JSX.Element {
  return (
    <BannerWrapper>
      <TextWrapper>
        <MainText>
          IT 스터디 모집
          <br />
          커뮤니티 플랫폼
        </MainText>
        <SubText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          rhoncus.
        </SubText>
      </TextWrapper>
      <ImgContainer>
        <BannerImg src={bannerImg} alt='banner' />
      </ImgContainer>
    </BannerWrapper>
  );
}

export default Banner;
