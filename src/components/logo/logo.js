import { Logo,LogoTextSec,LogoTextBold,LogoTextLight,LogoImg } from "./logostyle"
import LogoIcon from '../assets/img/logo.svg'

const Logosite=(props)=>{
    return(
        <Logo widthlogo={props.widthlogo} jcontent={props.jcontent} jcontentcenter="center">
                <LogoTextSec>
                    <LogoTextBold>درمانیتو</LogoTextBold>
                    <LogoTextLight>همراه شما در درمان</LogoTextLight>
                </LogoTextSec>
                <LogoImg src={LogoIcon} alt='logo'/>
            </Logo>
    )
}

export default Logosite