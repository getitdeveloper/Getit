import * as React from 'react';
import { useCallback, useState } from 'react';
import SelectImg from '@assets/images/Select.svg';
import {
  RecruitPostFormWrapper,
  StyledLink,
  BlockWrapper,
  LeftContainer,
  RightContainer,
  Period,
  SelectImgWrapper,
  FieldSelect,
  AddProjectIcon,
  ContentWrapper,
  SelectWrapper,
  Stacks,
  TextArea,
  DatePicker,
  SelectItemWrapper,
  SelectItem,
  CountMember,
  ButtonWrapper,
  Button,
} from './styles';

function RecruitPostForm(): JSX.Element {
  const [click, setClick] = useState(false);

  const handleDatePicker = useCallback((event: any) => {
    event.target.type = 'date';
  }, []);

  const handleBlur = useCallback((event: any) => {
    event.target.type = 'text';
  }, []);

  const handleRadio = useCallback(
    (event: any) => {
      event.target.checked = !click;
      setClick(!click);
    },
    [click],
  );
  return (
    <RecruitPostFormWrapper>
      <BlockWrapper>
        <LeftContainer>스터디명</LeftContainer>
        <RightContainer>
          <ContentWrapper>
            <SelectWrapper>
              <SelectImgWrapper>
                <img src={SelectImg} alt='select arrow button' />
              </SelectImgWrapper>
              <FieldSelect name='study-select' id='study-select'>
                <option value='description' disabled selected>
                  스터디 프로필 선택
                </option>
                <option value='dog'>1번</option>
                <option value='dog'>2번</option>
                <option value='dog'>3번</option>
              </FieldSelect>
            </SelectWrapper>
            <StyledLink to='/'>
              <div>
                <AddProjectIcon />
              </div>
              <div>스터디 만들기</div>
            </StyledLink>
          </ContentWrapper>
        </RightContainer>
      </BlockWrapper>

      <BlockWrapper>
        <LeftContainer>기술스택</LeftContainer>
        <RightContainer>
          <Stacks>
            <li>javascript</li>
            <li>nodejs</li>
            <li>파이널컷 프로</li>
            <li>일러스트레이션</li>
          </Stacks>
        </RightContainer>
      </BlockWrapper>
      <BlockWrapper>
        <LeftContainer>참여중인 Get-Iter</LeftContainer>
        <RightContainer>
          현재 참여중인 Get-Iter가 존재하지 않습니다.
        </RightContainer>
      </BlockWrapper>
      <BlockWrapper>
        <LeftContainer>모집글</LeftContainer>
        <RightContainer>
          <TextArea cols={30} rows={10} />
        </RightContainer>
      </BlockWrapper>
      <BlockWrapper>
        <LeftContainer>모집인원</LeftContainer>
        <RightContainer>
          <SelectItemWrapper>
            <li>
              <SelectItem>
                <input type='radio' onClick={handleRadio} />
                <div>개발자</div>
              </SelectItem>
              <CountMember>
                <input type='number' />
                <div>명</div>
              </CountMember>
            </li>
            <li>
              <SelectItem>
                <input type='radio' onClick={handleRadio} />
                <div>디자이너</div>
              </SelectItem>
              <CountMember>
                <input type='number' />
                <div>명</div>
              </CountMember>
            </li>
            <li>
              <SelectItem>
                <input type='radio' onClick={handleRadio} />
                <div>기획자</div>
              </SelectItem>
              <CountMember>
                <input type='number' />
                <div>명</div>
              </CountMember>
            </li>
          </SelectItemWrapper>
        </RightContainer>
      </BlockWrapper>
      <BlockWrapper>
        <LeftContainer>모집기간</LeftContainer>
        <RightContainer>
          <Period>
            <DatePicker
              placeholder='시작일'
              type='text'
              onFocus={handleDatePicker}
              onBlur={handleBlur}
            />
            <div>~</div>
            <DatePicker
              placeholder='종료일'
              type='text'
              onFocus={handleDatePicker}
              onBlur={handleBlur}
            />
          </Period>
        </RightContainer>
      </BlockWrapper>
      <ButtonWrapper>
        <Button type='button'>작성하기</Button>
      </ButtonWrapper>
    </RecruitPostFormWrapper>
  );
}

export default RecruitPostForm;
