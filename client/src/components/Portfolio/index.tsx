import * as React from 'react';
import { PortfolioContent } from './styles';

const portfolioDummyData = [
  {
    title: '포트폴리오1',
    url: 'https://www.investopedia.com/terms/p/portfolio.asp',
    image: '',
    detail: '이 포트폴리오는 이러했습니다.',
  },
  {
    title: '포트폴리오2',
    url: 'https://youtu.be/oM5_KjJguFU',
    image: '',
    detail: '이 포트폴리오는 저러했습니다.',
  },
  {
    title: '포트폴리오3',
    url: 'https://github.com/alyssa1996',
    image: '',
    detail: '이 포트폴리오는 그리했습니다.',
  },
];

function Portfolio(): JSX.Element {
  return (
    <div>
      {portfolioDummyData.map((content) => (
        <PortfolioContent key={content.title}>{content.title}</PortfolioContent>
      ))}
    </div>
  );
}

export default Portfolio;
