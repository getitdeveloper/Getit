import * as React from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import NewFamousSortButton from '@components/SortButton/NewFamous';
import Recruiting from '@components/SortButton/Recruiting';
import JobTypeSortButton from '@components/SortButton/JobType';
import { IBoardType } from '@types';
import {
  PostSubHeaderWrapper,
  RightContainer,
  WritePostText,
  WritePostIcon,
  WriteButton,
  LeftContainer,
} from './styles';

function PostSubHeader({ boardType }: IBoardType): JSX.Element {
  const history = useHistory();

  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );

  const handlePostType = useCallback(() => {
    switch (boardType) {
      case 'question':
        return history.push('/questionBoard/form', 'question');
      case 'free':
        return history.push('/freeBoard/form', 'free');
      case 'recruit':
        return history.push('/recruitBoard/form', 'recruit');
      default:
        break;
    }
  }, [userId, boardType]);

  return (
    <PostSubHeaderWrapper>
      <LeftContainer>
        {/* 직업 필터 버튼 */}
        <JobTypeSortButton boardType={boardType} />
      </LeftContainer>

      <RightContainer>
        {/* 최신순, 인기순 정렬 버튼 */}
        <NewFamousSortButton />
        {/* 모집 진행중, 모집마감 정렬 버튼. 모집 게시판에서만 보인다. */}
        {boardType === 'Recruit' && <Recruiting />}
        {/* 게시글 작성 버튼 */}
        <WriteButton type='button' onClick={handlePostType}>
          <WritePostText>게시글 작성</WritePostText>
          <WritePostIcon />
        </WriteButton>
      </RightContainer>
    </PostSubHeaderWrapper>
  );
}

export default PostSubHeader;
