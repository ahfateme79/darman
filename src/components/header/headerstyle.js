import styled from "styled-components";
import { Buttons } from "../buttons/button";

export const HeaderStyle = styled.header`
    width:100%;
    min-height:80vh;
    display:flex;
    align-items:center;
    flex-wrap:wrap;

`
export const LeftSecHead = styled.div`
    width:50%;
    height:auto;
    position: relative;
    display:flex;
    justify-content:flex-end;
    overflow-x:hidden;
    padding-top:20px;
    @media only screen and (max-width:700px){
       width:100%;
       align-items:center;
       justify-content:center;
       min-height:40vh;
       padding-top:70px;
    }
`
export const BehindImg = styled.img`
    height: auto;
    width:943px;
        @media only screen and (max-width:700px){
       width:60%;
    }
    @media only screen and (min-width:700px) and (max-width:1300px){
        width:700px;
    }
`
export const RightSecHead = styled.div`
    width:50%;
    height: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
        @media only screen and (max-width:700px){
       width:100%;
    }

`
export const TextSec = styled.div`
    width:50%;
    text-align:right;
    margin:30px auto;
        @media only screen and (max-width:700px){
       width:100%;
       text-align:center;
       justify-content:center;
    }

`
export const Heading = styled.h1`
    color:#1894ff;
        @media only screen and (max-width:700px){
            font-size:25px;
    }

`
export const HeadingPara = styled.p`
    line-height:5;
        @media only screen and (max-width:700px){
       font-weight:lighter;
       font-size:13px;
    }
    @media only screen and (min-width:700px) and (max-width:1000px){
        line-height:3
        }

`
export const BtnsSection = styled.div`
    width:55%;
    display:flex;
    flex-wrap:wrap;
    margin:0 auto;
    justify-content:space-evenly;
    padding-left:20px;
     @media only screen and (max-width:700px){
       width:100%;
       justify-content:center;
    }

    ${Buttons}{
        @media only screen and (max-width:1300px){
            margin:10px;
    }
    }
`

