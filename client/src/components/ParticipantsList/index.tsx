import React from 'react';
import CrownImg from '@assets/images/leader-crown.svg';
import { BoxContainer, UserContainer } from './styles';
import { Persons } from './types';

function Participants({ participants }: Persons): JSX.Element {
  return (
    <BoxContainer>
      <UserContainer>
        {participants?.map((participant, index) => {
          return (
            <>
              {/* 팀 프로필을 리더만 크라운 이미지 멤버 추가는 순서대로 이기때문에 index로 처리 */}
              {index === 0 && <img src={CrownImg} alt='leader crown' />}
              <span key={participant.nickname}>{participant.nickname}</span>
            </>
          );
        })}
      </UserContainer>
    </BoxContainer>
  );
}

export default Participants;
