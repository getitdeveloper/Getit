import * as React from 'react';
import { useCallback, useState } from 'react';
import { Tab } from '@material-ui/core';
import FreeBoardPage from '@pages/FreeBoardPage';
import QuestionBoardPage from '@pages/QuestionBoardPage';
import RecruitBoardPage from '@pages/RecruitBoardPage';
import { StyledTabs, StyledLabel, NavBarWrapper } from './styles';

function NavBar(): JSX.Element {
  const [selectTab, setSelectTab] = useState(0);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{ event?: EventTarget }>, selection: number) => {
      setSelectTab(selection);
      // 선택된 탭
      // console.log(selection);
    },
    [],
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
          />
          <Tab
            style={activeStyle(selectTab === 1)}
            label={<StyledLabel>질문 게시판</StyledLabel>}
          />
          <Tab
            style={activeStyle(selectTab === 2)}
            label={<StyledLabel>자유 게시판</StyledLabel>}
          />
        </StyledTabs>
      </NavBarWrapper>
      {selectTab === 0 && <RecruitBoardPage />}
      {selectTab === 2 && <FreeBoardPage />}
      {selectTab === 1 && <QuestionBoardPage />}
    </div>
  );
}

export default NavBar;
