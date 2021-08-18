import * as React from 'react';
import { Dialog, DialogTitle, List, ListItem } from "@material-ui/core";
import GithubLogin from "../../Auth/GithubLogin/GithubLogin";
import GoogleSocialLogin from "../../Auth/GoogleLogin/GoogleLogin";
import KakaoLogin from "../../Auth/KakaoLogin/KakaoLogin";

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
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Login</DialogTitle>
        <List>
        <ListItem button onClick={() => handleListItemClick("google")}>
            <GoogleSocialLogin/>
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("kakao")}>
        <KakaoLogin/>
        </ListItem>
        <ListItem button onClick={() => handleListItemClick("github")}>
        <GithubLogin/>
        </ListItem>
        </List>
      </Dialog>
    );
}

export default LoginDialog;