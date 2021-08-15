import MainPage from "../../pages/MainPage";
import axios from 'axios';

function KakaoOAuth2Callback(){

    //카카오 인가 코드 받아오기
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code)
    
    //! endpoint 수정 필요
    axios
        .post('/accounts/kakao/store', code)
        .then((response) => {
            //console.log(response)
            // 성공
        })
        .catch((error) => {
            //console.log(error.err_msg)
            // 실패
        });

    return <MainPage/>

}

export default KakaoOAuth2Callback;