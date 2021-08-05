import styled from "styled-components";
export const Bluebackgroun=styled.section`
    width:100%;
    display:flex;
    justify-content:${props=>props.content==='evenly'?'space-evenly':'center'};
    align-items:center;
    background-color:#1894ff;
    flex-wrap:wrap;
    min-height:150px;
     color:#fff;
`