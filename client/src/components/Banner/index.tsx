import * as React from 'react';
import BannerImg from '@assets/images/Banner.svg';
import {
  BannerWrapper,
  TextWrapper,
  MainText,
  SubText,
  ImgContainer,
  CharacterImg,
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
        <CharacterImg src={BannerImg} alt='banner' />
      </ImgContainer>
    </BannerWrapper>
  );
}

export default Banner;
