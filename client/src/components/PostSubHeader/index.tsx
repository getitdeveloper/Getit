import * as React from 'react';
import { useState, useCallback } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import { HorizontalLine } from '@assets/styles/commons';
import {
  PostSubHeaderWrapper,
  JobSelectButtonWrapper,
  SortAndWriteWrapper,
  WritePost,
  JobSelectButton,
} from './styles';
import { BoardType } from './types';

function PostSubHeader({ boardType }: BoardType): JSX.Element {
  const history = useHistory();
  const [selected, setSelected] = useState(false);
  const [option, setOption] = useState('recent');
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.id.user_pk;

  const handleJobSelectButton = useCallback(
    (event) => {
      setSelected(event.target);
      console.log(event.target);
    },
    [selected],
  );

  const handlePostType = useCallback(() => {
    if (userId) {
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
    } else {
      alert('로그인이 필요합니다. 먼저 로그인해주세요!');
    }
  }, [userId, boardType]);

  const handleSortPost = useCallback((event) => {
    console.log(event.target.value);
    setOption(event.target.value);
  }, []);

  return (
    <PostSubHeaderWrapper>
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
          data-job='ProjectManager'
          variant='contained'
          onClick={handleJobSelectButton}
        >
          <span data-job='ProjectManager'>기획자</span>
        </JobSelectButton>
      </JobSelectButtonWrapper>
      <HorizontalLine width='100%' />

      <SortAndWriteWrapper>
        <select name='sortPost' onChange={handleSortPost}>
          <option value='recent'>최신순</option>
          <option value='popular'>인기순</option>
        </select>
        <WritePost variant='contained' onClick={handlePostType}>
          게시글 작성
          <CreateIcon />
        </WritePost>
      </SortAndWriteWrapper>
    </PostSubHeaderWrapper>
  );
}

export default PostSubHeader;
