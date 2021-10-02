import * as React from 'react';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Stack } from '@assets/styles/commons';
import {
  StacksWrapper,
  StackInputField,
  DeleteButton,
  StackMessage,
} from './styles';

function StackInput(props: any) {
  const { initialStacks, setInitialStacks } = props;
  const [stack, setStack] = useState('');

  const onChange = (e: any) => {
    const { value } = e.target;
    setStack(value);
  };

  const onHandleAddStack = (e: any) => {
    if (e.key === 'Enter') {
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
    <div>
      <StacksWrapper>
        {initialStacks.map((content: string) => (
          <Stack key={content}>
            {content}
            <DeleteButton type='button' onClick={() => onDeleteStack(content)}>
              <CloseIcon />
            </DeleteButton>
          </Stack>
        ))}
        <StackInputField
          name='stack'
          onChange={onChange}
          value={stack}
          placeholder='관련 기술 스택을 입력하세요'
          onKeyPress={onHandleAddStack}
        />
      </StacksWrapper>
      <StackMessage>*Enter를 눌러 작성하신 스택을 생성해주세요!</StackMessage>
    </div>
  );
}

export default StackInput;
