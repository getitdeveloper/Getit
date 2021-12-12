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
          당신이 부러워하는 유니콘 스타트업도 사실 작은 모임에서 시작됐다.
        </SubText>
      </TextWrapper>
      <ImgContainer>
        <CharacterImg src={BannerImg} alt='banner' />
      </ImgContainer>
    </BannerWrapper>
  );
}

export default Banner;
