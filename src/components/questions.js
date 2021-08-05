import { Bluebackgroun } from "./bluesections/bluesectionstyle"
import Servicebox from "./servicebox/servixebox"
import Userquestions from "./userquestion/userquestion"
import { Questext } from "./userquestion/userquestionstyle"


const Questions=()=>{
    return(
        <>
        <Bluebackgroun content="center"><Questext>سوالات متداول</Questext></Bluebackgroun>
        <Servicebox/>
        <Userquestions/>
        </>
    )
}
export default Questions