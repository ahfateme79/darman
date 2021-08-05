import styled from "styled-components";

export const Infosec = styled.section`
    width:100%;
    min-height:80vh;
    display:flex;
    align-items:center;
    flex-wrap:wrap;

`
export const Infrectboxsec = styled.div`
    width:50%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width:700px){
        width:100%;
        min-height:40vh;
        justify-content:flex-end;
        padding:30px 0;
    }
`
export const User = styled.img`
    width:60px;
    height:70px;
    margin:auto 5px;

`
export const Mapicon = styled.img`
    width:20px;
    height:20px;

`
export const Lable = styled.span`
    width:20%;
    height:25%;
    background-color:#1894ff;
    border-radius:10px;
    color:#fff;
    font-size:12px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:10px;
`

export const Rectbox = styled.div`
    width:438px;
    height:125px;
    box-shadow:0px 0px 20px #e6f3ff;
    display:flex;
    border-radius:20px;
    margin:30px 0;
    &:not(:first-child){
        width:306px;
        height:78px;
        opacity:.6;
        h2{
            font-size:15px;
        }
        p{
            font-size:10px;
        }
        ${User}{
            width:40px;
            height:40px;
        }
        ${Mapicon}{
            width:10px;
            height:10px;
        }
        ${Lable}{
            font-size:10px;
        }
    }
    &:nth-child(2){
        margin:0 auto;
    }

    &:last-child{
        margin-right:300px;
        @media only screen and (max-width:700px){
        margin:0;
        width:293px;
        }
    }
     &:not(:last-child){
         @media only screen and (max-width:700px){
        display:none;
        }
    }
`
export const Details = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:center;
`
export const Topicinfo = styled.h2`
    color:#000;
    margin:10px;
    font-size:20px;
`
export const Infostep = styled.div`
    display:flex;
`

export const Stepstxt = styled.p`
    font-weight:lighter;
`
export const Infoformsec = styled.div`
    width:50%;
    flex-direction:column;
    display:flex;
    text-align:right;
    align-items:center;
    padding-right:3%;
    justify-content:center;
        @media only screen and (max-width:700px){
        width:100%;
        justify-content:flex-start;
        min-height:55vh;

    }

`
export const Textinfo = styled.h1`
    color:#1894ff;
    width:70%;
    margin:20px 0;
    line-height:2;
    font-size:30px;
    padding-left:10%;
    @media only screen and (max-width:700px){
        font-size:20px;
        padding:0;
        }
        @media only screen and (min-width:700px) and (max-width:1000px){
        font-size:25px;
        }
`
export const Paragraphinfo = styled.p`
    line-height:2;
    font-weight:lighter;
    text-align:right;
    width:70%;
    margin-bottom:20px;
    padding-left:10%;
    @media only screen and (max-width:700px){
        padding:0;
        }
        @media only screen and (min-width:700px) and (max-width:1000px){
        font-size:13px;
        }

`
