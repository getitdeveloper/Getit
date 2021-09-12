import * as React from 'react';
import { useCallback } from 'react';
import { Dialog, List, ListItem } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import GithubLogin from '../../Auth/GithubLogin/GithubLogin';
import GoogleSocialLogin from '../../Auth/GoogleLogin/GoogleLogin';
import KakaoLogin from '../../Auth/KakaoLogin/KakaoLogin';
import { useStyles, IconButtonContainer, Title } from './styles';
import { DialogProps } from './types';

function LoginDialog({ open, onClose }: DialogProps): JSX.Element {
  const classes = useStyles();

  return (
    <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open}>
      <IconButtonContainer aria-label='close' onClick={onClose}>
        <CloseIcon fontSize='large' />
      </IconButtonContainer>

      <Title disableTypography>로그인</Title>
      <List className={classes.buttonList}>
        <ListItem onClick={onClose} className={classes.button}>
          <KakaoLogin />
        </ListItem>
        <ListItem onClick={onClose} className={classes.button}>
          <GithubLogin />
        </ListItem>
        <ListItem onClick={onClose} className={classes.button}>
          <GoogleSocialLogin />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default LoginDialog;
