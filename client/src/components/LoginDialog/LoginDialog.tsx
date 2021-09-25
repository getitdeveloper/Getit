import * as React from 'react';
import { Dialog } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import GithubLogin from '@auth/GithubLogin/GithubLogin';
import GoogleSocialLogin from '@auth/GoogleLogin/GoogleLogin';
import KakaoLogin from '@auth/KakaoLogin/KakaoLogin';
import { IconButtonContainer, Title, SocialLoginWrapper } from './styles';
import { DialogProps } from './types';

function LoginDialog({ open, onClose }: DialogProps): JSX.Element {
  return (
    <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open}>
      <IconButtonContainer aria-label='close' onClick={onClose}>
        <CloseIcon fontSize='large' />
      </IconButtonContainer>

      <Title disableTypography>로그인</Title>

      <SocialLoginWrapper>
        <KakaoLogin />
        <GithubLogin />
        <GoogleSocialLogin />
      </SocialLoginWrapper>
    </Dialog>
  );
}

export default LoginDialog;
