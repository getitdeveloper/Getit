import * as React from 'react';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import PostItem from '../../Components/PostItem';
import PostSubHeader from '../../Components/PostSubHeader';
import { PageContainer, PageBackground } from '../../styles/page';
import { dummyData } from '../FreeBoardPage/dummyData';

interface HeaderProp {
  header?: boolean;
}

const defaultProp: HeaderProp = {
  header: true,
};

function QuestionBardPage(props: HeaderProp) {
  const { header } = props;
  return (
    <div>
      {header ? <SubHeader /> : null}
      <PageBackground>
        <PostSubHeader boardType='Question' />
        <PageContainer>
          {dummyData.map((content) => (
            <PostItem key={content.id} content={content} boardType='Question' />
          ))}
        </PageContainer>
      </PageBackground>
    </div>
  );
}
QuestionBardPage.defaultProps = defaultProp;

export default QuestionBardPage;
