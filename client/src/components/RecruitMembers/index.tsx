import * as React from 'react';
import { IMemberType } from './types';
import { Developer, Designer, ProjectManager } from './styles';

function MemberType({ developer, designer, pm }: IMemberType): JSX.Element {
  return (
    <>
      {developer ? <Developer>개발자</Developer> : null}
      {designer ? <Designer>디자이너</Designer> : null}
      {pm ? <ProjectManager>기획자</ProjectManager> : null}
    </>
  );
}

export default MemberType;
