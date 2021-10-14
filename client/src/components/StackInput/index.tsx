import * as React from 'react';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Stack } from '@assets/styles/commons';
import {
  StacksContainer,
  StackInputField,
  DeleteButton,
  StackMessage,
} from './styles';
import { StackProps } from './types';

function StackInput({
  initialStacks,
  setInitialStacks,
  placeHolder,
  heigth,
}: StackProps): JSX.Element {
  const [stack, setStack] = useState('');

  const onChange = (e: any) => {
    const { value } = e.target;
    setStack(value);
  };

  const onHandleAddStack = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setInitialStacks([...initialStacks, stack]);
      setStack('');
    }
  };

  const onDeleteStack = (currentStack: string) => {
    const filtered = initialStacks.filter(
      (element: string) => element !== currentStack,
    );
    setInitialStacks(filtered);
  };

  return (
    <>
      <StacksContainer height={heigth}>
        {initialStacks.map((content: string) => (
          <Stack key={content}>
            <span>{content}</span>
            <DeleteButton type='button' onClick={() => onDeleteStack(content)}>
              <CloseIcon />
            </DeleteButton>
          </Stack>
        ))}
        <StackInputField
          name='stack'
          onChange={onChange}
          value={stack}
          placeholder={placeHolder}
          onKeyPress={onHandleAddStack}
        />
      </StacksContainer>
      <StackMessage>*Enter를 눌러 작성하실 스택을 생성해주세요!</StackMessage>
    </>
  );
}

StackInput.defaultProps = {
  placeHolder: '',
  heigth: '',
};

export default StackInput;
