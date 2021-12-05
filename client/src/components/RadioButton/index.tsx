import React from 'react';
import CountMemberInput from '@components/RecruitPostForm/CountMember';
import { useLocation } from 'react-router-dom';
import { StyledRadioInput, StyledLabel } from './styles';
import { IRadioButton } from './types';

function RadioButton({ item, onClick, onChange }: IRadioButton): JSX.Element {
  const { pathname } = useLocation();
  return (
    <>
      {item.map((obj, index) => {
        return (
          <>
            <StyledRadioInput
              key={obj.value}
              type='radio'
              id={`radio-${obj.value}`}
              name={obj.value}
              onClick={onClick}
              checked={obj.checked}
            />
            <StyledLabel htmlFor={`radio-${obj.value}`}>{obj.text}</StyledLabel>
            {/* 스터디 모집 폼에서만 생성 */}
            {pathname === '/recruitBoard/form' && (
              <CountMemberInput item={obj} onChange={onChange} />
            )}
          </>
        );
      })}
    </>
  );
}

export default RadioButton;
