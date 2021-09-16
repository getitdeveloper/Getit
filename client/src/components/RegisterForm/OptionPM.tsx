import * as React from 'react';
import { StyledLabel, SelectWrapper, FieldSelect } from './styles';
import { IOptionProps } from './types';

function OptionPM({ field, image, handleChange }: IOptionProps): JSX.Element {
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
          <option value='하수'>
            하수: 협업 경험은 없고 개인 프로젝트만 진행해보았습니다.
          </option>
          <option value='중수'>
            중수: 협업 경험이 있으며 다른 사용자들과 협업을 진행할 수 있습니다.
          </option>
          <option value='고수'>고수: 현재 실무에서 종사하고 있습니다.</option>
        </FieldSelect>
      </SelectWrapper>
    </label>
  );
}

export default OptionPM;
