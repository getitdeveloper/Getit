import * as React from 'react'
import './KakaoLogin';
import dotenv from 'dotenv';
dotenv.config();

function KakaoLogin(){
    const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return(
        <div>
            <a href={KAKAO_AUTH_URL} className="kakaobtn">
                <img src="././images/kakao.png" alt="blabla"></img>
            </a>
        </div>
    )
}

export default KakaoLogin;