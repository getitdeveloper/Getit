import * as React from 'react';
import { ProjectContent } from './styles';

const finishedProject = [
  {
    title: '프로젝트 101',
  },
  {
    title: '프로젝트 레드벨벳',
  },
  {
    title: '프로젝트 샤이니',
  },
];
const currentProject = [
  {
    title: '프로젝트 트와이스',
  },
  {
    title: '프로젝트 세븐틴',
  },
  {
    title: '프로젝트 에스파',
  },
];

interface StatusProps {
  finished?: boolean;
}

const defaultProps: StatusProps = {
  finished: false,
};

function Project({ finished }: StatusProps): JSX.Element {
  if (finished) {
    return (
      <div>
        {finishedProject?.map((content) => (
          <ProjectContent key={content.title} color='#b9b9b9'>
            {content.title}
          </ProjectContent>
        ))}
      </div>
    );
  }

  return (
    <div>
      {currentProject?.map((content) => (
        <ProjectContent key={content.title}>{content.title}</ProjectContent>
      ))}
    </div>
  );
}

Project.defaultProps = defaultProps;
export default Project;
