import * as React from 'react';
import { IMemberType } from './types';
import { Developer, Designer, Planner } from './styles';

function MemberType({ member }: IMemberType): JSX.Element {
  if (member === '개발자') {
    return <Developer>{member}</Developer>;
  }
  if (member === '디자이너') {
    return <Designer>{member}</Designer>;
  }
  if (member === '기획자') {
    return <Planner>{member}</Planner>;
  }
  return <div />;
}

export default MemberType;
