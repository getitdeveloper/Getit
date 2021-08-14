import MainPage from "../pages/MainPage";


function OAuth2RedirectHandler(){

    //카카오 인가 코드 받아오기
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code)
    return <MainPage/>

}

export default OAuth2RedirectHandler;