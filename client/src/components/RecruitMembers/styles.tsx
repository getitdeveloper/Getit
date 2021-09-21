import styled, { css } from 'styled-components';

export const MemberTypeWrapper = styled.div`
  display: flex;
`;

const JobMixin = css`
  width: auto;
  padding: 0.2rem 1.3rem;
  margin-right: 0.8rem;
  border-radius: 7px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.whiteText};
  text-align: center;
`;

export const Developer = styled.div`
  background: ${(props) => props.theme.colors.developer};
  ${JobMixin}
`;

export const Designer = styled.div`
  background: ${(props) => props.theme.colors.designer};
  ${JobMixin}
`;

export const ProjectManager = styled.div`
  background: ${(props) => props.theme.colors.ProjectManager};
  ${JobMixin}
`;
