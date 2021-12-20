import React, { useCallback } from 'react';
import { ButtonWrapper, Button } from './styles';

function MoreButton(): JSX.Element {
  const handleClick = useCallback(() => {
    alert('서비스 준비중입니다.');
  }, []);

  return (
    <ButtonWrapper>
      <Button type='button' onClick={handleClick}>
        더보기
      </Button>
    </ButtonWrapper>
  );
}

export default MoreButton;
