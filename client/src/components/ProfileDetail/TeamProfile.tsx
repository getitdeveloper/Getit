import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonWrapper, Button } from './styles';

function TeamProfile(): JSX.Element {
  return (
    <div>
      <h1>팀 프로필</h1>
      <ButtonWrapper>
        <Link to='/myprofile/teamprofile/form'>
          <Button type='button'>팀 프로필 생성하기</Button>
        </Link>
      </ButtonWrapper>
    </div>
  );
}

export default TeamProfile;
