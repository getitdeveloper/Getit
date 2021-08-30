import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import GithubLogin from '../../Auth/GithubLogin/GithubLogin';
import GoogleSocialLogin from '../../Auth/GoogleLogin/GoogleLogin';
import KakaoLogin from '../../Auth/KakaoLogin/KakaoLogin';
import './LoginDialog.css';

export interface DialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

const useStyles = makeStyles({
  button: {
    padding: 0,
    margin: 0,
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1rem',
  },
});

function LoginDialog(props: DialogProps): JSX.Element {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose('false');
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
      className='dialog'
    >
      <IconButton aria-label='close' onClick={handleClose} className='close'>
        <CloseIcon />
      </IconButton>
      <DialogTitle className='login'>로그인</DialogTitle>
      <List className={classes.buttonList}>
        <ListItem
          onClick={() => handleListItemClick('google')}
          className={classes.button}
        >
          <GoogleSocialLogin />
        </ListItem>
        <ListItem
          onClick={() => handleListItemClick('kakao')}
          className={classes.button}
        >
          <KakaoLogin />
        </ListItem>
        <ListItem
          onClick={() => handleListItemClick('github')}
          className={classes.button}
        >
          <GithubLogin />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default LoginDialog;
