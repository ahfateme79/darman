
import { Flex, FlexBox, FLexboximg, FlexboxText, Headtopic, Headtopicsec, RightSec } from './servicboxstyle'
import Toy from '../assets/img/doctor-toys.svg'
import Pharmacyicon from '../assets/img/pharmacy.svg'
import Calender from '../assets/img/calender.svg'
import store from '../assets/img/17.svg'


const Flexboxarr = [
    {
        img:store,
        txt:'فروشگاه',
    },
    {
        img:Pharmacyicon,
        txt:'داروخانه',
    }, {
        img:Calender,
        txt:'نوبت دهب آنلاین',
    }, {
        img:Toy,
        txt:'ویزیت آنلاین',
    },
]

const Servicebox=()=>{
    return(
         <RightSec>
                <Headtopicsec>
                <Headtopic>
                    سوالات شما درباره کدام سرویس هست؟
                </Headtopic>
                </Headtopicsec>
                <Flex>
                    {
                        Flexboxarr.map(n=>{
                            return(
                                <FlexBox>
                                    <FLexboximg src={n.img} alt={n.txt}/>
                                    <FlexboxText>{n.txt}</FlexboxText>
                                </FlexBox>
                            )
                        })
                    }
                </Flex>
            </RightSec>
    )
}
export default Servicebox
