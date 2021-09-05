import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import PostItem from '../../Components/PostItem';
import PostSubHeader from '../../Components/PostSubHeader';
import { FREE_BOARD_REQUEST } from '../../reducers/actions';
import { PageContainer, PageBackground } from '../../styles/page';
import { IPost } from '../../types';

interface HeaderProp {
  header?: boolean;
}

const defaultProp: HeaderProp = {
  header: true,
};

function FreeBoardPage(props: HeaderProp) {
  const dispatch = useDispatch();
  const freeBoard = useSelector(
    (state: RootStateOrAny) => state.board.BoardList,
  );
  const { header } = props;

  React.useEffect(() => {
    dispatch({
      type: FREE_BOARD_REQUEST,
      data: {
        page: '1',
        category: 'free',
      },
    });
  }, []);

  console.log('freeBoard: ', freeBoard);
  return (
    <div>
      {header ? <SubHeader /> : null}

      <PageBackground>
        <PostSubHeader boardType='Free' />
        {freeBoard ? (
          <PageContainer>
            {freeBoard.results.map((content: IPost) => (
              <PostItem key={content.id} content={content} boardType='Free' />
            ))}
          </PageContainer>
        ) : null}
      </PageBackground>
    </div>
  );
}

FreeBoardPage.defaultProps = defaultProp;

export default FreeBoardPage;
