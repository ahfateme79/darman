import React,{useState} from "react"
import TopicSec from "../topic/topicsec"
import { Card, Cardbutton, Cardimg, Cardsec, Cardtxtbold, Cardtxtlight, Cardtxtsec, Servicsec, TopTexts } from "./servicestyle"
import Drug from '../assets/img/drug.svg'
import { Buttons } from "../buttons/button"



const Services = () => {
      const [windo, setWindo] = useState({
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setWindo({ width: window.innerWidth })
        }

        window.addEventListener('resize', handleResize)

    })
    const CArdarr = [
    {
        image: Drug,
        heading: windo.width>=700?'فروشگاه ارایشب و بهداشتی':'فقط داروخانه',
        para: 'مابل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صزفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم.',
    },
    {
        image: Drug,
        heading: windo.width>=700?'داروخانه':'داروخانه و فروشکاه',
        para: 'مابل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صزفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم',
    },
]

    return (
        <Servicsec>
            <TopTexts>
                <TopicSec width="100%" padding="0" topic="دردرمانیتو چه خدماتی ارايه خواهیم داد؟" para={windo.width>=700?"خدمات مورد نظر خود را برای ثبت انتخاب کنید.":"شما میتونید شماره خودتون یا دوست خودتون رو وارد کنید تا لینک دانلود پیامک بشه"}/>
            </TopTexts>
            <Cardsec>
                {
                    CArdarr.map(n => {
                        return(
                        <Card>
                            <Cardimg src={n.image} alt={n.heading} />
                            <Cardtxtsec>
                                <Cardtxtbold>{n.heading}</Cardtxtbold>
                                <Cardtxtlight>{n.para}</Cardtxtlight>
                            </Cardtxtsec>
                            <Cardbutton>
                                <Buttons btnColor="primary" textColor="transparent" btnBoredr="none">ثبت نام</Buttons>
                            </Cardbutton>
                        </Card>
                        )
                    })
                }
            </Cardsec>
        </Servicsec>
    )
}
export default Services