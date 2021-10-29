import * as React from 'react';
import { IMemberType } from './types';
import {
  Developer,
  Designer,
  ProjectManager,
  MemberTypeWrapper,
  Job,
} from './styles';

function MemberType({
  developer,
  designer,
  pm,
  position,
}: IMemberType): JSX.Element {
  return (
    <MemberTypeWrapper position={position}>
      <Job>{developer ? <Developer>개발자</Developer> : null}</Job>
      <Job>{designer ? <Designer>디자이너</Designer> : null}</Job>
      <Job>{pm ? <ProjectManager>기획자</ProjectManager> : null}</Job>
    </MemberTypeWrapper>
  );
}

export default MemberType;
