import * as React from 'react';
import { CountMember, SelectItem } from './styles';
import { IRadioButton } from './types';

function RadioButton({ value, onClick, onChange }: IRadioButton): JSX.Element {
  console.log('props ===>', value);
  return (
    <li key={value.text}>
      <SelectItem>
        <input
          type='radio'
          name={value.text}
          onClick={onClick}
          checked={value.checked}
        />
        <div>{value.text}</div>
      </SelectItem>
      <CountMember>
        {/* 라디오 버튼 선택시에만 입력창 활성화 */}
        {value.checked ? (
          <input
            type='number'
            min={0}
            pattern='[0-9]+'
            required
            value={value.count}
            onChange={onChange}
          />
        ) : (
          <input type='number' value={0} onChange={onChange} disabled />
        )}
        <div>명</div>
      </CountMember>
    </li>
  );
}

export default RadioButton;
