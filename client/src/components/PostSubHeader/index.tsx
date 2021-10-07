import * as React from 'react';
import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import { HorizontalLine } from '@assets/styles/commons';
import Button from '@material-ui/core/Button';
import {
  useStyles,
  PostSubHeaderWrapper,
  JobSelectButtonWrapper,
  SortAndWriteWrapper,
  WritePostText,
  WritePostIcon,
} from './styles';
import { IBoardType } from './types';

function PostSubHeader({ boardType }: IBoardType): JSX.Element {
  const classes = useStyles();

  const history = useHistory();
  const [selected, setSelected] = useState(false);
  const [option, setOption] = useState('recent');
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );

  const handleJobSelectButton = useCallback(
    (event) => {
      setSelected(event.target);
      console.log(event.target);
    },
    [selected],
  );

  const handlePostType = useCallback(() => {
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

  const handleSortPost = useCallback((event) => {
    console.log(event.target.value);
    setOption(event.target.value);
  }, []);

  return (
    <PostSubHeaderWrapper>
      <JobSelectButtonWrapper>
        <Button
          className={classes.jobButton}
          data-job='all'
          variant='contained'
          onClick={handleJobSelectButton}
        >
          <span data-job='all'>전체</span>
        </Button>
        <Button
          className={classes.jobButton}
          data-job='developer'
          variant='contained'
          onClick={handleJobSelectButton}
        >
          <span data-job='developer'>개발자</span>
        </Button>
        <Button
          className={classes.jobButton}
          data-job='designer'
          variant='contained'
          onClick={handleJobSelectButton}
        >
          <span data-job='designer'>디자이너</span>
        </Button>
        <Button
          className={classes.jobButton}
          data-job='projectManager'
          variant='contained'
          onClick={handleJobSelectButton}
        >
          <span data-job='projectManager'>기획자</span>
        </Button>
      </JobSelectButtonWrapper>
      <HorizontalLine width='100%' />

      <SortAndWriteWrapper>
        {/* TODO 컴포넌트로 분리 */}
        <select name='sortPost' onChange={handleSortPost}>
          <option value='recent'>최신순</option>
          <option value='popular'>인기순</option>
        </select>
        {/* 모집 게시판에서만 보인다. */}
        {boardType === 'Recruit' && (
          <select name='statusPost' onChange={handleSortPost}>
            <option value='open'>모집 진행중</option>
            <option value='close'>모집 마감</option>
          </select>
        )}

        <Button
          className={classes.writePostButton}
          variant='contained'
          onClick={handlePostType}
        >
          <WritePostText>게시글 작성</WritePostText>
          <WritePostIcon />
        </Button>
      </SortAndWriteWrapper>
    </PostSubHeaderWrapper>
  );
}

export default PostSubHeader;
