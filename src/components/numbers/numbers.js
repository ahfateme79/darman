import { Bluebackgroun } from "../bluesections/bluesectionstyle"
import { Number, Numbersec, Topicnumbers } from "./numberstyle"


const numarr=[
    {
        topic:'تعداد داروخانه ها و مراکز',
        number:'+120,000'
    },
     {
        topic:'تعداد کاربران درمانیتو',
        number:'+120,000'
    },
     {
        topic:'تعداد داروخانه ها و مراکز',
        number:'+120,000'
    },
]



const Numbers=()=>{
    return(
        <Bluebackgroun content="evenly">
            {
                numarr.map(n=>{
                    return(
                    <Numbersec>
                        <Topicnumbers>{n.topic}</Topicnumbers>
                        <Number>{n.number}</Number>
                    </Numbersec>
                    )
                })
            }
        </Bluebackgroun>
    )
}
export default Numbers






