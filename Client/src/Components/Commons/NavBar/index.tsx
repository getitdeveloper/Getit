import * as React from 'react';
import { useCallback, useState } from 'react';
import { Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import {
  StyledTabs,
  StyledLabel,
  NavBarWrapper,
  JobSelectButtonWrapper,
  JobSelectButton,
  HorizontalLine,
  SortAndWriteWrapper,
  WritePost,
} from './styles';

function NavBar(): JSX.Element {
  const [selectTab, setSelectTab] = useState(0);
  const [selectJob, setSelectJob] = useState(0);
  const [sortPost, setSortPost] = React.useState('recent');
  const [selected, setSelected] = React.useState(false);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{ event?: EventTarget }>, selection: number) => {
      setSelectTab(selection);
      // 선택된 탭
      // console.log(selection);
    },
    [],
  );

  const handleJobSelectButton = useCallback(
    (event: any) => {
      setSelected(event.target);
      console.log(event.target);
    },
    [selected],
  );

  const activeStyle = useCallback(
    (isActive) => {
      return isActive ? { color: '#4dd28f' } : { color: '#000000' };
    },
    [selectTab],
  );

  return (
    <div>
      {/* 페이지 네이게이션 */}
      <NavBarWrapper>
        <StyledTabs value={selectTab} onChange={handleChange} centered>
          <Tab
            style={activeStyle(selectTab === 0)}
            label={<StyledLabel>스터디 모집 게시판</StyledLabel>}
            component={Link}
            to='/'
          />
          <Tab
            style={activeStyle(selectTab === 1)}
            label={<StyledLabel>질문 게시판</StyledLabel>}
            component={Link}
            to='questionBoard'
          />
          <Tab
            style={activeStyle(selectTab === 2)}
            label={<StyledLabel>자유 게시판</StyledLabel>}
            component={Link}
            to='freeBoard'
          />
        </StyledTabs>
      </NavBarWrapper>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <JobSelectButtonWrapper>
          <JobSelectButton
            data-job='all'
            variant='contained'
            onClick={handleJobSelectButton}
          >
            <span data-job='all'>전체</span>
          </JobSelectButton>
          <JobSelectButton
            data-job='developer'
            variant='contained'
            onClick={handleJobSelectButton}
          >
            <span data-job='developer'>개발자</span>
          </JobSelectButton>
          <JobSelectButton
            data-job='designer'
            variant='contained'
            onClick={handleJobSelectButton}
          >
            <span data-job='designer'>디자이너</span>
          </JobSelectButton>
          <JobSelectButton
            data-job='planner'
            variant='contained'
            onClick={handleJobSelectButton}
          >
            <span data-job='planner'>기획자</span>
          </JobSelectButton>
        </JobSelectButtonWrapper>
        <HorizontalLine />

        <SortAndWriteWrapper>
          <select name='sortPost'>
            <option value='recent'>최신순</option>
            <option value='popular'>인기순</option>
          </select>
          <WritePost variant='contained'>
            게시글 작성
            <CreateIcon />
          </WritePost>
        </SortAndWriteWrapper>
      </div>
    </div>
  );
}

export default NavBar;
