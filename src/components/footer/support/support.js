import { Supbtn, Supbtnsec, Supimg, Supstyle, Suptextbold, Suptextlight, Suptexts } from "./supstyle"
import Supicon from '../../assets/img/support.svg'


const Support = () => {
    return (
        <Supstyle>
            <Supbtnsec>
                <Supbtn>پشتیبانی : ۰۲۱-۴۴۲۱۹۶۷۱<Supimg src={Supicon} alt="support"/></Supbtn>
            </Supbtnsec>
            <Suptexts>
                <Suptextlight>پاسخگویی در روزهای کاری از ۹ صبح تا ۹ شب</Suptextlight>
                <Suptextbold>پشتیبانی درمانیتو</Suptextbold>
            </Suptexts>
        </Supstyle>
    )
}
export default Support