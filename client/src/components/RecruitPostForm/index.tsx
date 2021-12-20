import React, {
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
import RadioButton from '@components/RadioButton/index';
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

function RecruitPostForm(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user,
  );
  const teamProfileList = useSelector(
    (state: RootStateOrAny) => state.postList.teamProfileList,
  );

  const [recruitList, setRecruitList] = useState([
    { text: '개발자', value: 'developer', checked: false, count: 0 },
    { text: '디자이너', value: 'designer', checked: false, count: 0 },
    { text: '기획자', value: 'pm', checked: false, count: 0 },
  ]);
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

  const handleRecruitStatus = useCallback(
    (event) => {
      const { name } = event.target;
      switch (name) {
        case 'developer': {
          setRecruitList([
            {
              text: '개발자',
              value: 'developer',
              checked: !recruitList[0].checked,
              count: 0,
            },
            recruitList[1],
            recruitList[2],
          ]);
          break;
        }
        case 'designer': {
          setRecruitList([
            recruitList[0],
            {
              text: '디자이너',
              value: 'designer',
              checked: !recruitList[1].checked,
              count: 0,
            },
            recruitList[2],
          ]);
          break;
        }
        case 'pm': {
          setRecruitList([
            recruitList[0],
            recruitList[1],
            {
              text: '기획자',
              value: 'pm',
              checked: !recruitList[2].checked,
              count: 0,
            },
          ]);
          break;
        }
        default:
          console.log('empty select');
      }
    },
    [recruitList],
  );

  const handleRecruitCount = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      const recruitMemberCount = parseInt(value, 10);
      switch (name) {
        case 'developer': {
          setRecruitList([
            Object.assign(recruitList[0], { count: recruitMemberCount }),
            recruitList[1],
            recruitList[2],
          ]);
          break;
        }
        case 'designer': {
          setRecruitList([
            recruitList[0],
            Object.assign(recruitList[1], { count: recruitMemberCount }),
            recruitList[2],
          ]);
          break;
        }
        case 'pm': {
          setRecruitList([
            recruitList[0],
            recruitList[1],
            Object.assign(recruitList[2], { count: recruitMemberCount }),
          ]);
          break;
        }
        default:
          console.log('empty select');
      }
    },
    [recruitList],
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
    // 폼 제출 목록 체크

    if (!userId) {
      return alert('로그인이 필요합니다. 로그인 후 이용해 주세요.');
    }

    if (selectTeamProfileId === null) {
      return alert(
        '팀 프로필을 선택해주세요. 생성하신 팀 프로필이 없다면 생성해주세요.',
      );
    }

    if (
      title === '' ||
      recruitContent === '' ||
      startDate === '' ||
      endDate === '' ||
      stacks === []
    ) {
      return alert('모든 항목을 작성해 주세요.');
    }
    // 모집 직종 선택 후 인원수 미입력 체크
    if (
      (recruitList[0].checked === true && recruitList[0].count === 0) ||
      (recruitList[1].checked === true && recruitList[1].count === 0) ||
      (recruitList[2].checked === true && recruitList[2].count === 0) ||
      Number.isNaN(Number(recruitList[0].count)) ||
      Number.isNaN(Number(recruitList[1].count)) ||
      Number.isNaN(Number(recruitList[2].count))
    ) {
      return alert('선택하신 직업별 모집인원은 1명 이상이어야 합니다.');
    }

    if (
      recruitList[0].checked === false &&
      recruitList[1].checked === false &&
      recruitList[2].checked === false
    ) {
      return alert('모집인원을 설정해주세요.');
    }

    // 모집 인원 체크
    if (
      recruitList[0].count + recruitList[1].count + recruitList[2].count <
      1
    ) {
      return alert('모집인원은 최소 1명 이상이어야 합니다.');
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
        developer: recruitList[0].count,
        designer: recruitList[1].count,
        pm: recruitList[2].count,
        start_date: startDate,
        end_date: endDate,
        stack: stacks,
      },
      history,
    });
  }, [
    userId,
    selectTeamProfileId,
    recruitList,
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
            <RadioButton
              item={recruitList}
              onClick={handleRecruitStatus}
              onChange={handleRecruitCount}
            />
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
