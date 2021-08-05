import Forms from "../form/form"
import { Details, Infoformsec, Infosec, Infostep, Infrectboxsec, Lable, Mapicon, Paragraphinfo, Rectbox, Stepstxt, Textinfo, Topicinfo, User } from "./infostyles"
import Usericon from '../assets/img/person-icon.svg'
import Mapiconinfo from '../assets/img/map-marker.svg'

const ar = [1, 2, 3]

const Information = () => {
    return (
        <Infosec>
            <Infrectboxsec>
                {
                    ar.map(n => {
                        return(
                        <Rectbox key={n}>
                            <Lable>شبانه روزی</Lable>
                            <Details>
                                <Topicinfo>نام داروخانه شما</Topicinfo>
                                <Infostep>
                                    <Stepstxt>درمانیتو،سرویس داروخانه،داروخانه شما</Stepstxt>
                                    <Mapicon src={Mapiconinfo} alt='mapicon' />
                                </Infostep>
                            </Details>
                            <User src={Usericon} alt="user" />
                        </Rectbox>
                        )
                    })

                }
            </Infrectboxsec>
            <Infoformsec>
                <Textinfo>شما هم تو سلامت و بهبود مردم کشورمون موثر باشید</Textinfo>
                <Paragraphinfo>با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم ب درمان کمک کنید و به هزاران کاربر خدمات ارائه بدین و روزانه درآمد سفارشهای خودتون رو تسویه کنید
                </Paragraphinfo>
                <Forms btntext="ثبت نام سریع" />
            </Infoformsec>
        </Infosec>
    )
}
export default Information