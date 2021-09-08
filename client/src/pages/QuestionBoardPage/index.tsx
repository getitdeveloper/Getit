import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import PostItem from '../../Components/PostItem';
import PostSubHeader from '../../Components/PostSubHeader';
import { PageContainer, PageBackground } from '../../styles/page';
import { COMMON_BOARD_REQUEST } from '../../reducers/actions';
import { dummyData } from '../FreeBoardPage/dummyData';
import { IPost } from '../../types';

interface HeaderProp {
  header?: boolean;
}

const defaultProp: HeaderProp = {
  header: true,
};

function QuestionBardPage(props: HeaderProp) {
  const dispatch = useDispatch();
  const boardList = useSelector(
    (state: RootStateOrAny) => state.board.BoardList,
  );
  const { header } = props;

  React.useEffect(() => {
    dispatch({
      type: COMMON_BOARD_REQUEST,
      data: {
        page: '1',
        category: 'question',
      },
    });
  }, []);

  if (!boardList) {
    return <CircularProgress />;
  }
  return (
    <div>
      {header ? <SubHeader /> : null}
      <PageBackground>
        <PostSubHeader boardType='Question' />
        {boardList ? (
          <PageContainer>
            {boardList.results.map((content: IPost) => (
              <PostItem
                key={content.id}
                content={content}
                boardType='Question'
              />
            ))}
          </PageContainer>
        ) : null}
      </PageBackground>
    </div>
  );
}
QuestionBardPage.defaultProps = defaultProp;

export default QuestionBardPage;
