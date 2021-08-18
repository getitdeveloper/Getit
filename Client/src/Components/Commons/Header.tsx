import * as React from 'react';
import SearchBar from "./SearchBar";
import './Header.css'
import { Button } from "@material-ui/core";
import LoginDialog from "../LoginDialog/LoginDialog";

function Header(){

    const [open, setOpen] = React.useState(false);

    const handleClose = (value: string) => {
        setOpen(false);
      };

    return(
        <div>
            <div className="logo">
                <p></p>
                <p className="logotext">로고</p>
                <Button variant="outlined" color="primary" onClick={()=>setOpen(true)}>
                    Login
                </Button>
                <LoginDialog open={open} onClose={handleClose}/>
            </div>
            <SearchBar/>
        </div>
    )

}

export default Header;