import React from 'react';
import { CountMember } from './styles';
import { ICountInput } from './types';

function CountMemberInput({ item, onChange }: ICountInput): JSX.Element {
  return (
    <CountMember>
      {/* 라디오 버튼 선택시에만 입력창 활성화 */}
      {item.checked ? (
        <input
          type='number'
          min={0}
          pattern='[0-9]+'
          required
          name={item.value}
          value={item.count}
          onChange={onChange}
        />
      ) : (
        <input type='number' value={0} disabled />
      )}
      <div>명</div>
    </CountMember>
  );
}

export default CountMemberInput;
