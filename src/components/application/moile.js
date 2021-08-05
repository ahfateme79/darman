import React,{useState} from "react"
import Forms from "../form/form"
import { Appimg, Donapps, Donappssec, Donapptext, Donapptextbld, Donapptextlight, Formsec, Mobileapp, Mobileappimg, Mobileappsec } from "./appstyle"
import sibapp from '../assets/img/sibapp.svg'
import Mobilrapp from '../assets/img/4.svg'
import bazar from '../assets/img/bazar.svg'
import android from '../assets/img/6.svg'

const arr=[sibapp,bazar,android]
const Mob=()=>{
     const [windo, setWindo] = useState({
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setWindo({ width: window.innerWidth })
        }

        window.addEventListener('resize', handleResize)

    })
    return(
        <Mobileappsec>
            <Mobileapp>
                <Mobileappimg src={Mobilrapp}/>
            </Mobileapp>
            <Formsec>
                <Donapptext>
                    <Donapptextbld>دانلود اپلیکیشن درمانیتو</Donapptextbld>
                    <Donapptextlight>{windo.width>=700?'برای دریافت لینک دانلود شماره موبایل خود را وارد کنید':' شما میتونید شماره خودتون یا دوست خودتون رو وارد کنید تالینک دانلود پیامک بشه'}</Donapptextlight>
                </Donapptext>
                <Forms btntext="بفرست"/>
                <Donappssec>
                    {
                        arr.map(n=>{
                            return(
                                <Donapps>
                                    <Appimg src={n}/>
                                </Donapps>
                            )
                        })
                    }
                </Donappssec>
            </Formsec>
        </Mobileappsec>
    )
}
export default Mob