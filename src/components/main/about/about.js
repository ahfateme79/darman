import React,{useState} from 'react'
import { Aboutstyle, ExplainAbout, BoxesSec, Boxes, BoxMOdel, BoxImg, BoxText, VideoSec, Video, Poster, PlayVideo, Play } from './aboutstyle'
import Search from '../../assets/img/search.svg'
import Verify from '../../assets/img/verify.svg'
import Mobilrapp from '../../assets/img/4.svg'
import Playicon from '../../assets/img/Group 5534.svg'
import TopicSec from '../../topic/topicsec'
import easy from '../../assets/img/13.svg'
import ui from '../../assets/img/14.svg'


const Aboutarr = [
    {
        icon: Search,
        text: 'جستجو سریع'
    },
    {
        icon: easy,
        text: 'راحت'
    },
    {
        icon: ui,
        text: 'به صرفه'
    },
    {
        icon: Verify,
        text: 'جستجو سریع'
    },

]
const paragraph = `درمانبتو یک سامانه است ک امکان سفارش دارو،محصولات ارایشی بهداشتی نوبت گیری و مشاوره پزشکان را به
راحتی و به صورت آنلاین فراهم کرده است`
const para = `درمانیتو یک سوپر اپلیکیشن هست که سعی داره با سرویس هایمتفاوتش روند درمان شمارو سریع تر کنه؛شما با درمانیتو میتونیدنسخه خودتون رو برای تمام داروخانه های اطراف خودتون بفرستید
`
const About = () => {
    const [windo, setWindo] = useState({
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setWindo({ width: window.innerWidth })
        }

        window.addEventListener('resize', handleResize)

    })
    return (
        <Aboutstyle>
            <ExplainAbout>
                <TopicSec width="100%" padding="35%" topic="درباره درمانیتو" para={windo.width >= 700 ? paragraph : para} />
                <BoxesSec>
                    {
                        Aboutarr.map(n => {
                            return (
                                <Boxes>
                                    <BoxMOdel href="#"><BoxImg src={n.icon} alt={n.text} /></BoxMOdel>
                                    <BoxText>{n.text}</BoxText>
                                </Boxes>
                            )
                        })
                    }
                </BoxesSec>
            </ExplainAbout>
            <VideoSec>
                <Video>
                    <Poster src={Mobilrapp} alt="mobileapp" />
                    <PlayVideo href="#">
                        <Play src={Playicon} alt="playicon" />
                    </PlayVideo>
                </Video>
            </VideoSec>
        </Aboutstyle>
    )
}
export default About