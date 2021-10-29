import * as React from 'react';
import {
  useCallback,
  useState,
  useEffect,
  ChangeEvent,
  FocusEvent,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import moment from 'moment';
import SelectImg from '@assets/images/Select.svg';
import RadioButton from '@components/RadioButton';
import Participants from '@components/ParticipantsList/index';
import {
  RECRUIT_POSTING_REQUEST,
  TEAM_PROFILE_LIST_REQUEST,
} from '@reducers/actions';
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
  TitleInput,
} from './styles';
import CountMemberInput from './CountMember';

const recruitList = [
  { text: '개발자', value: 'developer', checked: false, count: 0 },
  { text: '디자이너', value: 'designer', checked: false, count: 0 },
  { text: '기획자', value: 'pm', checked: false, count: 0 },
];

function RecruitPostForm(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user,
  );
  const teamProfileList = useSelector(
    (state: RootStateOrAny) => state.postList.teamProfileList,
  );

  const [recruitDeveloper, setRecruitDeveloper] = useState(recruitList[0]);
  const [recruitDesigner, setRecruitDesigner] = useState(recruitList[1]);
  const [recruitPm, setRecruitPm] = useState(recruitList[2]);
  const [recruitContent, setRecruitContent] = useState('');
  const [selectTeamProfileId, setSelectTeamProfileId] = useState(null);
  const [stacks, setStacks] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (teamProfileList) {
      const selectResult = teamProfileList.find(
        (profile: any) => profile.id === Number(selectTeamProfileId),
      );
      setStacks(selectResult?.stack);
      setParticipants(selectResult?.members);
    }
  }, [selectTeamProfileId]);

  useEffect(() => {
    dispatch({
      type: TEAM_PROFILE_LIST_REQUEST,
      data: {
        userId,
      },
    });
  }, []);

  const handleDatePicker = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.target.type = 'date';
    },
    [],
  );

  const handleDate = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    // 모집 시작일
    if (event.target.name === 'start') {
      setStartDate(event.target.value);
    }
    // 모집 종료일
    if (event.target.name === 'end') {
      setEndDate(event.target.value);
    }
  }, []);

  const handleBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
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

  const handleTitle = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [recruitContent],
  );

  const handleRecruitContent = useCallback(
    (event) => {
      setRecruitContent(event.target.value);
    },
    [recruitContent],
  );

  const handleSubmit = useCallback(() => {
    // 필수 입력 내역 미입력 체크

    if (
      userId === undefined ||
      selectTeamProfileId === null ||
      title === '' ||
      recruitContent === '' ||
      (recruitDeveloper.checked === true && recruitDeveloper.count === 0) ||
      (recruitDesigner.checked === true && recruitDesigner.count === 0) ||
      (recruitPm.checked === true && recruitPm.count === 0) ||
      Number.isNaN(Number(recruitDeveloper.count)) ||
      Number.isNaN(Number(recruitDesigner.count)) ||
      Number.isNaN(Number(recruitPm.count)) ||
      startDate === '' ||
      endDate === '' ||
      stacks === []
    ) {
      return alert('모든 항목을 작성해 주세요.');
    }

    // 모집기간 endDate가 startDate 보다 빠른 경우
    const isafter = moment(startDate).isAfter(moment(endDate));
    if (isafter) {
      return alert('모집 기간을 제대로 설정해주세요.');
    }

    // 모집 시작 날이 현재보다 과거인 경우
    const isBefore = moment(startDate).isBefore(
      moment(Date.now()).add(-1, 'days'),
    );
    if (isBefore) {
      return alert('모집 기간 시작일을 현재보다 과거로 설정할 수 없습니다.');
    }

    dispatch({
      type: RECRUIT_POSTING_REQUEST,
      data: {
        user: userId,
        study: Number(selectTeamProfileId),
        title,
        content: recruitContent,
        developer: recruitDeveloper.count,
        designer: recruitDesigner.count,
        pm: recruitPm.count,
        start_date: startDate,
        end_date: endDate,
        stack: stacks,
      },
      history,
    });
  }, [
    userId,
    selectTeamProfileId,
    recruitDeveloper,
    recruitDesigner,
    recruitPm,
    title,
    recruitContent,
    startDate,
    endDate,
    stacks,
  ]);

  const handleTeamProfile = useCallback((event) => {
    setSelectTeamProfileId(event.target.value);
  }, []);

  return (
    <RecruitPostFormWrapper>
      <BlockWrapper>
        <LeftContainer>
          <TitleWrapper>
            <div>팀 프로필</div>
            <div>(필수)</div>
          </TitleWrapper>
        </LeftContainer>
        <RightContainer>
          <ContentWrapper>
            <SelectWrapper>
              <SelectImgWrapper>
                <img src={SelectImg} alt='select arrow button' />
              </SelectImgWrapper>
              <FieldSelect
                name='study-select'
                id='study-select'
                onChange={handleTeamProfile}
              >
                <option value='description' disabled selected>
                  팀 프로필 선택
                </option>
                {teamProfileList &&
                  teamProfileList.map((teamProfile: any) => (
                    <option key={teamProfile.title} value={teamProfile.id}>
                      {teamProfile.title}
                    </option>
                  ))}
              </FieldSelect>
            </SelectWrapper>
            <StyledLink to='/'>
              <div>
                <AddProjectIcon />
              </div>
              <div>팀 프로필 생성</div>
            </StyledLink>
          </ContentWrapper>
        </RightContainer>
      </BlockWrapper>

      {/* 스터디명 (팀프로필) 설정시 렌더링 */}
      {selectTeamProfileId && (
        <>
          <BlockWrapper>
            <LeftContainer>기술스택</LeftContainer>
            <RightContainer>
              <Stacks>
                {stacks &&
                  stacks.map((skill: any) => <li key={skill}>{skill}</li>)}
              </Stacks>
            </RightContainer>
          </BlockWrapper>
          <BlockWrapper>
            <LeftContainer>참여중인 Get-Iter</LeftContainer>
            <RightContainer>
              <Participants participants={participants} />
            </RightContainer>
          </BlockWrapper>
        </>
      )}
      <BlockWrapper>
        <LeftContainer>
          <TitleWrapper>
            <div>제목</div>
            <div>(필수)</div>
          </TitleWrapper>
        </LeftContainer>
        <RightContainer>
          <TitleInput
            placeholder='제목을 작성해주세요.'
            value={title}
            maxLength={100}
            onChange={handleTitle}
          />
          <TextCount>{title.length}/ 100</TextCount>
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
            value={recruitContent}
            maxLength={500}
            onChange={handleRecruitContent}
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
              name='start'
              onFocus={handleDatePicker}
              onBlur={handleBlur}
              onChange={handleDate}
            />
            <div>~</div>
            <DatePicker
              placeholder='종료일'
              type='text'
              name='end'
              onFocus={handleDatePicker}
              onBlur={handleBlur}
              onChange={handleDate}
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
