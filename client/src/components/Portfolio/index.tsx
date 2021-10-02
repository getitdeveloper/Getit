import * as React from 'react';
import { useState } from 'react';
import { Dialog } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import imageIcon from '@assets/icons/imageIcon.svg';
import plusIcon from '@assets/icons/plusIcon.svg';
import { IconButton } from '@assets/styles/commons';
import {
  useStyles,
  PortfolioContent,
  PortfolioWrapper,
  PortfolioImage,
  PortfolioUrl,
  AddButton,
  PortfolioFieldWrapper,
  SubmitPortfolioButton,
  PortfolioInput,
} from './styles';

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
  const classes = useStyles();
  const [portfolios, setPortfolios] = useState(portfolioDummyData);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [projectDetail, setProjectDetail] = useState('');
  const [open, setOpen] = useState(false);
  const AddPortfolio = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setProjectTitle(value);
        break;
      case 'url':
        setProjectUrl(value);
        break;
      case 'detail':
        setProjectDetail(value);
        break;
      default:
        break;
    }
  };

  const onAddNewPortfolio = () => {
    const NewPortfolio = {
      title: projectTitle,
      url: projectUrl,
      image: '',
      detail: projectDetail,
    };
    setPortfolios([...portfolios, NewPortfolio]);
    setOpen(false);
  };

  return (
    <PortfolioWrapper>
      {portfolios.map((content) => (
        <PortfolioContent key={content.title}>
          <PortfolioImage src={imageIcon} alt='default icon' />
          <p>{content.title}</p>
          <PortfolioUrl href={content.url} target='_self'>
            {content.url}
          </PortfolioUrl>
        </PortfolioContent>
      ))}
      <AddButton type='button' onClick={AddPortfolio}>
        <img src={plusIcon} alt='plus icon' />
      </AddButton>

      <Dialog
        className={classes.dialog}
        onClose={onClose}
        aria-labelledby='simple-dialog-title'
        open={open}
      >
        <p>포트폴리오 추가</p>
        <PortfolioFieldWrapper>
          <PortfolioImage src={imageIcon} alt='default icon' />
          <div>
            <PortfolioInput
              name='title'
              value={projectTitle}
              onChange={onChange}
              placeholder='프로젝트 제목'
            />
            <PortfolioInput
              name='url'
              value={projectUrl}
              onChange={onChange}
              placeholder='링크를 첨부해주세요'
            />
            <PortfolioInput placeholder='파일을 첨부해주세요' />
            <PortfolioInput
              name='detail'
              value={projectDetail}
              onChange={onChange}
              placeholder='간략한 설명'
            />
          </div>
        </PortfolioFieldWrapper>
        <SubmitPortfolioButton type='button' onClick={onAddNewPortfolio}>
          완료
        </SubmitPortfolioButton>
      </Dialog>
    </PortfolioWrapper>
  );
}

export default Portfolio;
