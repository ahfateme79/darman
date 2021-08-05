import styled from "styled-components";
import Mob from "../application/moile";
import About from "./about/about";
import Membership from "./memberhip/member";
import Psibilitiy from "./posibilities/posibilitis";



const MainStyle = styled.main`
    width:100%;
`

const Main = () => {
    return (
        <MainStyle>
            <About />
            <Psibilitiy />
            <Mob/>
            <Membership/>
        </MainStyle>

    )
}
export default Main