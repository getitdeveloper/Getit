import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import PostItem from '../../Components/PostItem';
import PostSubHeader from '../../Components/PostSubHeader';
import { COMMON_BOARD_REQUEST } from '../../reducers/actions';
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
  const boardList = useSelector(
    (state: RootStateOrAny) => state.board.BoardList,
  );
  const { header } = props;

  React.useEffect(() => {
    dispatch({
      type: COMMON_BOARD_REQUEST,
      data: {
        page: '1',
        category: 'free',
      },
    });
  }, []);

  console.log('freeBoard: ', boardList);
  return (
    <div>
      {header ? <SubHeader /> : null}

      <PageBackground>
        <PostSubHeader boardType='Free' />
        {boardList ? (
          <PageContainer>
            {boardList.results.map((content: IPost) => (
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
