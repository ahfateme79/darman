import styled from "styled-components";

export const Numbersec=styled.div`
    width:33%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#fff;
    @media only screen and (max-width:700px){
        width:100%;
        margin:20px 0;
    }

`
export const Topicnumbers=styled.h3`
    font-weight:lighter;
            @media only screen and (max-width:700px){
        font-size:15px;
    }

`
export const Number=styled.span`
    font-size:35px;
    margin:10px 0;
            @media only screen and (max-width:700px){
        font-size:25px;
    }

`