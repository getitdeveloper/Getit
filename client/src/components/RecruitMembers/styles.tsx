import styled, { css } from 'styled-components';

interface Position {
  position: string | undefined;
}

export const MemberTypeWrapper = styled.div`
  display: flex;
  justify-content: ${(props: Position) =>
    props.position ? props.position : 'initial'};
  flex-wrap: wrap;
`;

export const Job = styled.div`
  margin: 0.3rem 0;
`;

const JobMixin = css`
  width: auto;
  padding: 0.2rem 1.3rem;
  margin: 0 0.5rem;
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

// export const JobWrapper = styled.span``
