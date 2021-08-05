import styled from "styled-components";

export const Userquestionstyle=styled.section`
    width:100%;
    min-height:70vh;
             @media only screen and (max-width:700px){
       min-height:50vh;
    }
`
export const Questext=styled.h1`
    font-size:30px;
    @media only screen and (max-width:700px){
        font-size:18px;
        margin-top:70px;
    }

`
export const Summary=styled.summary`
    color:#2361b5;
    list-style-type:none;
    padding:10px 0;
    cursor: pointer;
    &::after{
        content:"+";
        width:30px;
        height:30px;
        color:#2361b5;
        margin:0 10px;
        font-size:30px;
         @media only screen and (max-width:700px){
        font-size:20px;
        transform:translate(40px,-20px)
    }
    }
        @media only screen and (max-width:700px){
        font-size:10px;
    }


`
export const Detailsques=styled.details`
    width:70%;
    border-bottom:1px solid #e6f3ff;
   text-align:right;
   margin:10px auto;
   padding:20px;
        @media only screen and (max-width:700px){
        width:85%;
        padding:10px
    }
    &[open] Summary::after{
    content:"-"
    }

`


export const Explain=styled.p`
    font-weight:lighter;
    padding-right:20px;
    border-right:3px solid #00de9a;
    margin:20px;
    @media only screen and (max-width:700px){
        font-size:11px;
    }
`
