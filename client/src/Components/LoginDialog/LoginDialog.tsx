import * as React from 'react';
import { Dialog, DialogTitle, IconButton, List, ListItem } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close'
import GithubLogin from "../../Auth/GithubLogin/GithubLogin";
import GoogleSocialLogin from "../../Auth/GoogleLogin/GoogleLogin";
import KakaoLogin from "../../Auth/KakaoLogin/KakaoLogin";
import './LoginDialog.css';

export interface DialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

function LoginDialog(props: DialogProps){
    const { onClose, open } = props;

    const handleClose = () => {
        onClose("false");
      };
    
      const handleListItemClick = (value: string) => {
        onClose(value);
      };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className="dialog">
        <button aria-label="close" onClick={handleClose} className="close">
          <CloseIcon/>
        </button>
        <h6 className="login">로그인</h6>
        <div className="list">
          <button onClick={() => handleListItemClick("google")} className="loginbutton">
            <GoogleSocialLogin/>
          </button>
          <button onClick={() => handleListItemClick("kakao")} className="loginbutton">
            <KakaoLogin/>
          </button>
          <button onClick={() => handleListItemClick("github")} className="loginbutton">
            <GithubLogin/>
          </button>
        </div>
      </Dialog>
    );
}

export default LoginDialog;