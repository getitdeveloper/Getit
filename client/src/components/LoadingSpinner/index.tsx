import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import BannerImg from '@assets/images/Banner.svg';
import { MessageWrapper, MessageImage, Message } from './styles';

function LoadingSpinner(): JSX.Element {
  const [loadFail, setLoadFail] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoadFail(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loadFail) {
    return (
      <MessageWrapper>
        <MessageImage src={BannerImg} alt='banner' className='bannerImg' />
        <Message>
          {`죄송합니다. 현재 서비스가 원활히 운영되지 않습니다. 
        이 문제가 반복될 경우 서비스팀에 문의주시기 바랍니다.
        이용에 불편을 드려 죄송합니다.`}
        </Message>
      </MessageWrapper>
    );
  }
  return <CircularProgress />;
}

export default LoadingSpinner;
