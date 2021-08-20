import './Banner.css'

function Banner(){
    return(
        <div className="bannerContainer">
            <div className="textContainer">
                <p className="mainText"> IT 스터디 모집<br/> 커뮤니티 플랫폼</p>
                <p className="subText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus. </p>
            </div>
            <div className="imgContainer">
                <img src="/images/banner.png" alt="banner" className="bannerImg"/>
            </div>
        </div>
    )
}

export default Banner;