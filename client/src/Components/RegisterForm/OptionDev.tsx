import * as React from 'react';
import { StyledLabel, SelectWrapper, FieldSelect } from './styles';
import { IOptionProps } from './types';

function OptionDev({ field, image, handleChange }: IOptionProps): JSX.Element {
  return (
    <label htmlFor={`user-level-${field}`}>
      <StyledLabel>레벨(필수)</StyledLabel>
      <SelectWrapper>
        <img src={image} alt='select arrow button' />
        <FieldSelect
          name={`user-level-${field}`}
          required
          onChange={handleChange}
        >
          <option value='description' disabled selected>
            레벨을 선택해 주세요.
          </option>
          <option value='코린이'>
            코린이: 협업 경험은 없고 개인 프로젝트만 진행해보았습니다.
          </option>
          <option value='코등학생'>
            코등학생: 협업 경험이 없지만 API를 사용해 협업을 진행할 수 있습니다.
          </option>
          <option value='코대생'>
            코대생: 협업 경험이 있고 API를 자유자재로 다룰 수 있습니다.
          </option>
          <option value='코드닌자'>
            코드닌자: 현재 실무에서 종사하고 있는 개발자입니다.
          </option>
        </FieldSelect>
      </SelectWrapper>
    </label>
  );
}

export default OptionDev;
