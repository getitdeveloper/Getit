import * as React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import {
  JobSelectButtonWrapper,
  SortAndWriteWrapper,
  WritePost,
  JobSelectButton,
} from './styles';
import { HorizontalLine } from '../../styles/commons';

interface BoardType {
  boardType: string;
}

function PostSubHeader(props: BoardType) {
  const history = useHistory();
  const [selected, setSelected] = React.useState(false);
  const user = useSelector((state: RootStateOrAny) => state.user);
  const userId = user.id.user_pk;
  const { boardType } = props;

  const handleJobSelectButton = React.useCallback(
    (event: any) => {
      setSelected(event.target);
      console.log(event.target);
    },
    [selected],
  );

  const handlePostType = () => {
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
  };
  return (
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
      <HorizontalLine width='80%' />

      <SortAndWriteWrapper>
        <select name='sortPost'>
          <option value='recent'>최신순</option>
          <option value='popular'>인기순</option>
        </select>
        <WritePost variant='contained' onClick={handlePostType}>
          게시글 작성
          <CreateIcon />
        </WritePost>
      </SortAndWriteWrapper>
    </div>
  );
}

export default PostSubHeader;
