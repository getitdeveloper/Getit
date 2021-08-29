import styled, { css } from 'styled-components';

export const MemberTypeWrapper = styled.div`
  display: flex;
`;

const JobMixin = css`
  width: auto;
  padding: 0.2rem 1.9rem;
  margin-right: 0.8rem;
  border-radius: 7px;
  font-size: 12px;
  color: #ffffff;

  text-align: center;
`;

export const Developer = styled.div`
  background: #4dd290;
  ${JobMixin}
`;

export const Designer = styled.div`
  background: #ffb65a;
  ${JobMixin}
`;

export const Planner = styled.div`
  background: #fc9557;
  ${JobMixin}
`;
