import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import './Header.css'

function Header(){

    return(
        <div>
            <div className="logo">
                <p></p>
                <p className="logotext">로고</p>
                <Link to="/login" className="loginbtn">로그인</Link>
            </div>
            <SearchBar/>
        </div>
    )

}

export default Header;