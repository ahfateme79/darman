import React, { useState } from 'react'
import TopicSec from '../../topic/topicsec'
import { Posystyle, Pharmacy, Timelinesec, Timeline, TimelineItem, Topictimeline, Steps, RightSec, Headtopicsec, Headtopic, Flex, FlexBox, FLexboximg, FlexboxText } from './posistyle'
import Toy from '../../assets/img/doctor-toys.svg'
import Pharmacyicon from '../../assets/img/pharmacy.svg'
import Calender from '../../assets/img/calender.svg'
import store from '../../assets/img/17.svg'



const Phteaxt = `در سرویس داروخونه شما میتوانید نسخه دارویی یا محصولات بهداشتی خودتون رو برای پیدا
                    شدن به داروخونه و
                    فروشگاه ها سفارش بدید`
const SecondPHtext = `  شما با درمانیتو میتونید نسخه و دارو خودتون رو اول برای تمامداروخانه های اطراف خودتون و اگر پیدا نشد در  تمام داروخانه هاارسال کنید و در کمترین زمان دارو شما پیدا می 
`

const Timelinearr = [
    {
        heading: "قدم اول",
        explain: "وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات رو وارد کنید"
    },
    {
        heading: "قدم دوم",
        explain: "بعد از ارسال عکس نسخه،باید ادرس محل خودتون رو وارد کنید"
    }, {
        heading: "قدم سوم",
        explain: "اگر نتیجه جستجو نسخه موفقیت امیز باشه باید منتظر تحویل سفارش باشید"
    },
]

const Flexboxarr = [
    {
        img: store,
        txt: 'فروشگاه',
    },
    {
        img: Pharmacyicon,
        txt: 'داروخانه',
    }, {
        img: Calender,
        txt: 'نوبت دهب آنلاین',
    }, {
        img: Toy,
        txt: 'ویزیت آنلاین',
    },
]
const Psibilitiy = () => {
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
        <Posystyle>
            <Pharmacy>
                <TopicSec width="100%" padding="35%" topic='داروخانه آنلاین' para={windo.width>=700?Phteaxt:SecondPHtext} />
                <Timelinesec>
                    <Timeline>
                        {
                            Timelinearr.map(n => {
                                return (
                                    <TimelineItem>
                                        <Topictimeline>{n.heading}</Topictimeline>
                                        <Steps>{n.explain}</Steps>
                                    </TimelineItem>
                                )
                            })
                        }
                    </Timeline>
                </Timelinesec>
            </Pharmacy>
            <RightSec>
                <Headtopicsec>
                    <Headtopic>
                        {windo.width >= 700 ? 'امکانات درمانیتو' : 'سرویس های درمانیتو'}
                    </Headtopic>
                </Headtopicsec>
                <Flex>
                    {
                        Flexboxarr.map(n => {
                            return (
                                <FlexBox>
                                    <FLexboximg src={n.img} alt={n.txt} />
                                    <FlexboxText>{n.txt}</FlexboxText>
                                </FlexBox>
                            )
                        })
                    }
                </Flex>
            </RightSec>
        </Posystyle>
    )
}
export default Psibilitiy
