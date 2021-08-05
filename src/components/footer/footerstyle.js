import styled from "styled-components";
import { Logo } from "../logo/logostyle";


export const Footerstyle = styled.footer`
    width:100%;
    display:flex;
    flex-direction:column;
`
export const Footersec = styled.section`
    width:100%;
    display:flex;
    min-height:60vh;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width:700px){
      min-height:50vh;
    }
`
export const Download = styled.div`
    display:flex;
    flex-direction:column;
    width:33%;
    height:100%;
    justify-content:flex-start;
    align-items:flex-end;
    padding-bottom:6%;
     @media only screen and (max-width:1000px){
     display:none;
    }
    @media only screen and (min-width:1000px) and (max-width:1163px){
            justify-content:center;
            align-items:center;
            padding-top:6%;
    }


`
export const Toptext = styled.h4`
    text-align:right;
`
export const Downloadsec = styled.div`
    display:flex;
    margin:20px 0;
    @media only screen and (min-width:1000px) and (max-width:1163px){
        flex-wrap:wrap;
       align-items:flex-end;
       justify-content:center;
    }


`
export const Donapps = styled.a`
    margin:12px 0;
    width:180px;
    height:55px;
    margin-left:20px;
`
export const Appimg = styled.img`
    width:100%;
    height:100%;
`
export const Footerlistsec = styled.div`
    width:33%;
    display:flex;
    justify-content:center;
    @media only screen and (max-width:700px){
      display:none;
    }
    @media only screen and (min-width:700px) and (max-width:1000px){
        width:50%;
    }

`
export const Footerlist = styled.ul`
    width:40%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-end;
`
export const Footerlistitem = styled.li`
    margin:15px 0;
`
export const Footerlistitemlink = styled.a`
    color:#595260;
    font-size:13px;
    &:hover{
        padding-right:8px;
        border-right:3px solid #00de9a;
        color:#1894ff;
    }
`
export const Footerlogosec = styled.div`
    width:33%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
    padding-right:10%;
    @media only screen and (max-width:700px){
      width:100%;
    }

    @media only screen and (min-width:700px) and (max-width:1000px){
        width:50%;
    }   
    ${Logo}{
    @media only screen and (max-width:700px){
      justify-content:flex-end;
      transform:translateX(20px)
    }

    }
`
export const Footertextsec = styled.div`
    text-align:right;
    margin:25px 0;

`
export const Footerboldtext = styled.h5`
   font-size:15px;
   @media only screen and (max-width:500px){
      font-size:13px;
    }
     @media only screen and (min-width:500px) and (max-width:700px){
      font-size:15px;
    }
`
export const Footerlighttext = styled.p`
   font-size:14px;
   font-weight:lighter;
   line-height:2;
   text-align:right;
   padding-left:20%;
   margin:7px 0;
   @media only screen and (max-width:700px){
      padding-left:5%;
      font-size:11px
    }
         @media only screen and (min-width:500px) and (max-width:700px){
      font-size:15px;
    }

`
export const Socialmedia = styled.div`
    width:100%;
    margin:20px 0;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    @media only screen and (max-width:700px){
      justify-content:center;
    }

`
export const Linkicon = styled.a`
    width:30px;
    height:30px;
    margin:0 10px;
`
export const Icons = styled.i`
    font-size:30px;
    color:gray;
    &:hover{
        color:#1894ff;
    }
`