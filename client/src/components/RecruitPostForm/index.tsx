import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import SelectImg from '@assets/images/Select.svg';
import RadioButton from '@components/RadioButton';
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
  RecruitMemberWrapper,
  ButtonWrapper,
  Button,
  TitleWrapper,
} from './styles';
import CountMemberInput from './CountMember';

const recruitList = [
  { text: '개발자', value: 'developer', checked: false, count: 0 },
  { text: '디자이너', value: 'designer', checked: false, count: 0 },
  { text: '기획자', value: 'pm', checked: false, count: 0 },
];

function RecruitPostForm(): JSX.Element {
  const [recruitDeveloper, setRecruitDeveloper] = useState(recruitList[0]);
  const [recruitDesigner, setRecruitDesigner] = useState(recruitList[1]);
  const [recruitPm, setRecruitPm] = useState(recruitList[2]);
  const [recruitContent, setRecruitContent] = useState('');

  useEffect(() => {
    console.log(recruitDeveloper);
    console.log(recruitDesigner);
    console.log(recruitPm);
  }, [recruitDeveloper, recruitDesigner, recruitPm]);

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

  const handleSubmit = useCallback(() => {
    console.log(recruitDeveloper, recruitDesigner, recruitPm, recruitContent);
  }, [recruitDeveloper, recruitDesigner, recruitPm, recruitContent]);

  return (
    <RecruitPostFormWrapper>
      <BlockWrapper>
        <LeftContainer>
          <TitleWrapper>
            <div>스터디명</div>
            <div>(필수)</div>
          </TitleWrapper>
        </LeftContainer>
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
        <LeftContainer>
          <TitleWrapper>
            <div>모집글</div>
            <div>(필수)</div>
          </TitleWrapper>
        </LeftContainer>
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
        <LeftContainer>
          <TitleWrapper>
            <div>모집인원</div>
            <div>(필수)</div>
          </TitleWrapper>
        </LeftContainer>
        <RightContainer>
          <RecruitMemberWrapper>
            {/* 라디오 버튼 목록 */}
            <li>
              <RadioButton
                item={recruitDeveloper}
                onClick={handleRecuitDeveloper}
              />
              <CountMemberInput
                item={recruitDeveloper}
                onChange={handleRecuitDeveloperNum}
              />
            </li>
            <li>
              <RadioButton
                item={recruitDesigner}
                onClick={handleRecuitDesigner}
              />
              <CountMemberInput
                item={recruitDesigner}
                onChange={handleRecuitDesignerNum}
              />
            </li>
            <li>
              <RadioButton item={recruitPm} onClick={handleRecuitPm} />
              <CountMemberInput item={recruitPm} onChange={handleRecuitPmNum} />
            </li>
          </RecruitMemberWrapper>
        </RightContainer>
      </BlockWrapper>
      <BlockWrapper>
        <LeftContainer>
          <TitleWrapper>
            <div>모집기간</div>
            <div>(필수)</div>
          </TitleWrapper>
        </LeftContainer>
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
        <Button type='button' onClick={handleSubmit}>
          작성하기
        </Button>
      </ButtonWrapper>
    </RecruitPostFormWrapper>
  );
}

export default RecruitPostForm;
