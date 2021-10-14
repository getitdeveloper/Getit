import * as React from 'react';
import {
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setStack(value);
  };

  // 기술 스택 추가
  const onHandleAddStack = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();

        if (stack.length < 1) {
          return alert('기술 스택을 입력하세요!');
        }

        setInitialStacks([...initialStacks, stack]);
        setStack('');
      }
    },
    [stack],
  );

  // 기술 스택 삭제
  const onDeleteStack = (event: MouseEvent<HTMLButtonElement>) => {
    const removeTarget = event.currentTarget.name;

    const filtered = initialStacks.filter(
      (skill, index) => removeTarget !== `${skill}-${index}`,
    );

    setInitialStacks(filtered);
  };

  return (
    <>
      <StacksContainer height={heigth}>
        {initialStacks.map((content, index) => (
          <Stack key={`${content}-${index}`}>
            <span>{content}</span>
            <DeleteButton
              name={`${content}-${index}`}
              type='button'
              onClick={onDeleteStack}
            >
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
