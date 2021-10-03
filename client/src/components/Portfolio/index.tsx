import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_REGISTER_REQUEST,
} from '@reducers/actions';
import { useState, useEffect, useLayoutEffect } from 'react';
import { IPortfolio } from '@types';
import { Dialog } from '@material-ui/core';
import imageIcon from '@assets/icons/imageIcon.svg';
import plusIcon from '@assets/icons/plusIcon.svg';
import LoadingSpinner from '@components/LoadingSpinner';
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

function Portfolio(props: any): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { portfolioList } = props;
  const userId = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo?.user_pk,
  );
  const [portfolios, setPortfolios] = useState(portfolioList);
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
    const NewPortfolio: IPortfolio = {
      title: projectTitle,
      user: userId,
      link: projectUrl,
      image: null,
      contents: projectDetail,
    };
    console.log(NewPortfolio);
    setPortfolios([...portfolios, NewPortfolio]);
    dispatch({
      type: PORTFOLIO_REGISTER_REQUEST,
      data: {
        user_pk: userId,
        portfolio: NewPortfolio,
      },
    });
    setOpen(false);
  };

  if (!portfolioList) {
    return <LoadingSpinner />;
  }
  return (
    <PortfolioWrapper>
      {portfolios.map((content: IPortfolio) => (
        <PortfolioContent key={content.id}>
          <PortfolioImage src={imageIcon} alt='default icon' />
          <p>{content.title}</p>
          <PortfolioUrl href={content.link} target='_self'>
            {content.link}
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
