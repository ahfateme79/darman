import React, { useState } from "react"
import Forms from "../../form/form"
import TopicSec from "../../topic/topicsec"
import { Memberform, Memberimg, Memberimgsec, Membersec, Membershipstyle } from "./memberstyle"
import Member from '../../assets/img/health__two_color (1).svg'




const Text = `اگر به عنوان داروخونه یا مراکز درمانی قصد دارید در روند درمان و کسب و کار خودتان تغییری ایجاد
                        کنید درمانیتو منتظر شماست`

const Secondteat = `اگر شما داروخانه یا مرکز درمانی هستید و قصد دارید درمان روند  در هموطن هامون و کسب کار خودتون تغییری ایجاد کنید درمانیتو منتظر شماست
`

const Membership = () => {
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
        <Membershipstyle>
            <Membersec>
                <Memberimgsec>
                    <Memberimg src={Member} alt="member" />
                </Memberimgsec>
                <Memberform>
                    <TopicSec padding="0" width="70%" topic={windo.width >= 700 ? "عضویت داروخونه یا مراکز درمانی" : "من داروخانه یا مرکز درمانی هستم"} para={windo.width>=700?Text:Secondteat} />
                    <Forms btntext="ثبت نام سریع" />
                </Memberform>
            </Membersec>
        </Membershipstyle>
    )
}
export default Membership