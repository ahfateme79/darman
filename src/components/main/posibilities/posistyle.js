import styled from "styled-components";
import Check from '../../assets/img/check.svg'
import arrow from '../../assets/img/20.svg'

export const Posystyle = styled.section`
    width:100%;
    min-height:90vh;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`
export const Pharmacy = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-top:5%;
     @media only screen and (max-width:700px){
      width:100%;
      order:2;
    }

`

export const Timelinesec = styled.div`
    width:100%;
    display:flex;
    margin:25px 0;
    justify-content:flex-end;
    position: relative;
    @media only screen and (max-width:700px){
        justify-content:center;
        width:85%;
    }

`
export const Timeline = styled.ul`
    text-align:right;
    &::after{
        content:'';
        width:1.5px;
        height:170px;
        display:inline-block;
        position:absolute;
        top:0;
        background-color:#00de9a;
        @media only screen and (max-width:700px){
        height:150px;

    }
    }
`

export const TimelineItem = styled.li`
    margin:5px 25px;
    text-align:right;

    &::after{
        content:url(${arrow});
        width:34px;
        height:34px;
        border-radius:100%;
        display:inline-block;
        background-color:#e6f3ff;
        display:flex;
        justify-content:center;
        align-items:center;
        position: absolute;
        right:0;
        z-index:1;
        transform:translate(20px,-100px);
        @media only screen and (max-width:400px){
        transform:translate(20px,-99px);

    }
    @media only screen and (min-width:400px) and (max-width:700px){
        transform:translate(15px,-80px);

    }
    }
        &:last-child:after{
            background-color:#00de9a;
            content:url(${Check});
    }
`
export const Topictimeline = styled.h3`
    font-size:16px;
        @media only screen and (max-width:700px){
     font-size:13px;
    }

`
export const Steps = styled.p`
    margin:25px;
    font-size:13px;
    @media only screen and (max-width:700px){
     font-size:11px;
     margin:20px;
    }

`
export const RightSec = styled.div`
    width:40%;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media only screen and (max-width:700px){
      width:100%;
      order:1;
    }

`
export const Headtopicsec = styled.div`
    width:70%;
    text-align:right;
    margin:20px;
    padding-right:30px;
     @media only screen and (max-width:700px){
     padding:0;
     margin:15px;
    }

`
export const Headtopic = styled.h2`
    color:#1894ff;
    border-right:4px solid #00de9a;
    font-size:20px;
    padding-right:12px;

`

export const Flex = styled.div`
    width:70%;
    height:auto;
    display:flex;
    margin:20px auto;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
         @media only screen and (max-width:700px){
     margin:20px 0;
     width:100%;
    }
    @media only screen and (min-width:700px) and (max-width:1000px){
        width:100%
        }
`
export const FlexboxText = styled.figcaption`
    font-size:13px;
    margin:10px 0;
`

export const FlexBox = styled.figure`
    width:160px;
    height:160px;
    border-radius:20px;
    box-shadow:0px 0px 30px #e6f3ff;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:30px 20px;
             @media only screen and (max-width:700px){
      width:120px;
      height:120px;
      margin:20px 15px;
    }
    @media only screen and (min-width:700px) and (max-width:1000px){
        width:100px;
        height:100px;
        margin:20px 10px;
        }
        &:hover{
            box-shadow:0px 0px 20px rgb(129, 129, 235)
        }
        &:hover figcaption{
            color:#1894ff;
        }

`
export const FLexboximg = styled.img`
    width:64px;
    height:62px;
    @media only screen and (max-width:700px){
      width:50px;
      height:50px;
    }
        @media only screen and (min-width:700px) and (max-width:1000px){
             width:30px;
      height:30px;

        }


`
