import * as React from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import NewFamousSortButton from '@components/SortButton/NewFamous';
import Recruiting from '@components/SortButton/Recruiting';
import JobTypeSortButton from '@components/SortButton/JobType';
import { IBoardType } from './types';
import {
  useStyles,
  PostSubHeaderWrapper,
  RightContainer,
  WritePostText,
  WritePostIcon,
  LeftContainer,
} from './styles';

function PostSubHeader({ boardType }: IBoardType): JSX.Element {
  const classes = useStyles();
  const history = useHistory();

  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );

  const handlePostType = useCallback(() => {
    // TODO 서버 정상 가동시 handlePostType 주석 제거하기
    // if (userId) {
    console.log('current board', boardType);
    switch (boardType) {
      case 'Question':
        return history.push('/questionBoard/form', 'question');
      case 'Free':
        return history.push('/freeBoard/form', 'free');
      case 'Recruit':
        return history.push('/recruitBoard/form', 'recruit');
      default:
        break;
    }
    // } else {
    //   alert('로그인이 필요합니다. 먼저 로그인해주세요!');
    // }
  }, [userId, boardType]);

  return (
    <PostSubHeaderWrapper>
      <LeftContainer>
        {/* 직업 필터 버튼 */}
        <JobTypeSortButton />
      </LeftContainer>

      <RightContainer>
        {/* 최신순, 인기순 정렬 버튼 */}
        <NewFamousSortButton />
        {/* 모집 진행중, 모집마감 정렬 버튼. 모집 게시판에서만 보인다. */}
        {boardType === 'Recruit' && <Recruiting />}
        {/* 게시글 작성 버튼 */}
        <Button
          className={classes.writePostButton}
          variant='contained'
          onClick={handlePostType}
        >
          <WritePostText>게시글 작성</WritePostText>
          <WritePostIcon />
        </Button>
      </RightContainer>
    </PostSubHeaderWrapper>
  );
}

export default PostSubHeader;
