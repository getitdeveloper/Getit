import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
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
  TextCount,
  DatePicker,
  SelectItemWrapper,
  ButtonWrapper,
  Button,
} from './styles';
import RadioButton from './RadioButton';

function RecruitPostForm(): JSX.Element {
  const list = [
    { text: 'developer', checked: false, count: 0 },
    { text: 'designer', checked: false, count: 0 },
    { text: 'pm', checked: false, count: 0 },
  ];

  const [recruitDeveloper, setRecruitDeveloper] = useState(list[0]);
  const [recruitDesigner, setRecruitDesigner] = useState(list[1]);
  const [recruitPm, setRecruitPm] = useState(list[2]);

  const [recruitContent, setRecruitContent] = useState('');

  useEffect(() => {
    console.log(recruitDeveloper);
  }, [recruitDeveloper]);

  const handleDatePicker = useCallback((event: any) => {
    event.target.type = 'date';
  }, []);

  const handleBlur = useCallback((event: any) => {
    event.target.type = 'text';
  }, []);

  // 라디오버튼 선택
  const handleRecuitDeveloper = useCallback(() => {
    setRecruitDeveloper({
      ...recruitDeveloper,
      checked: !recruitDeveloper.checked,
      count: 0,
    });
  }, [recruitDeveloper]);

  const handleRecuitDesigner = useCallback(() => {
    setRecruitDesigner({
      ...recruitDesigner,
      checked: !recruitDesigner.checked,
      count: 0,
    });
  }, [recruitDesigner]);

  const handleRecuitPm = useCallback(() => {
    setRecruitPm({
      ...recruitPm,
      checked: !recruitPm.checked,
      count: 0,
    });
  }, [recruitPm]);

  // 인원수 입력
  const handleRecuitDeveloperNum = useCallback(
    (event) => {
      setRecruitDeveloper({
        ...recruitDeveloper,
        count: parseInt(event.target.value, 10),
      });
    },
    [recruitDeveloper],
  );

  const handleRecuitDesignerNum = useCallback(
    (event) => {
      setRecruitDesigner({
        ...recruitDesigner,
        count: parseInt(event.target.value, 10),
      });
    },
    [recruitDesigner],
  );

  const handleRecuitPmNum = useCallback(
    (event) => {
      setRecruitPm({
        ...recruitPm,
        count: parseInt(event.target.value, 10),
      });
    },
    [recruitPm],
  );

  const handleChangeRecruitContent = useCallback(
    (event) => {
      setRecruitContent(event.target.value);
    },
    [recruitContent],
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
          <TextArea
            placeholder='모집글을 작성해주세요.'
            cols={30}
            rows={10}
            onChange={handleChangeRecruitContent}
            maxLength={500}
          />
          <TextCount>{recruitContent.length}/ 500</TextCount>
        </RightContainer>
      </BlockWrapper>
      <BlockWrapper>
        <LeftContainer>모집인원</LeftContainer>
        <RightContainer>
          <SelectItemWrapper>
            {/* 라디오 버튼 목록 */}
            <RadioButton
              value={recruitDeveloper}
              onClick={handleRecuitDeveloper}
              onChange={handleRecuitDeveloperNum}
            />
            <RadioButton
              value={recruitDesigner}
              onClick={handleRecuitDesigner}
              onChange={handleRecuitDesignerNum}
            />
            <RadioButton
              value={recruitPm}
              onClick={handleRecuitPm}
              onChange={handleRecuitPmNum}
            />
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
