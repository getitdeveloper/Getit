import * as React from 'react';
import CrownImg from '@assets/images/leader-crown.svg';
import { useSelector, RootStateOrAny } from 'react-redux';
import { BoxContainer, UserContainer } from './styles';
import { Persons } from './types';

function Participants({ participants }: Persons): JSX.Element {
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );

  return (
    <BoxContainer>
      <UserContainer>
        {participants?.map((participant) => {
          return (
            <>
              {/* 팀 프로필을 리더만 크라운 이미지 */}
              {userId === Number(participant.member) && (
                <img src={CrownImg} alt='leader crown' />
              )}
              <span key={participant.nickname}>{participant.nickname}</span>
            </>
          );
        })}
      </UserContainer>
    </BoxContainer>
  );
}

export default Participants;
