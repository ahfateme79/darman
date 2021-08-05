import styled from "styled-components";



export const Servicsec=styled.section`
    width:100%;
    min-height:110vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const TopTexts=styled.div`
    width:75%;
    margin:20px auto;
    @media only screen and (max-width:700px){
        width:90%;
    }

`
export const Cardsec=styled.section`
    width:75%;
    margin:10px auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
      @media only screen and (max-width:700px){
        width:90%;
        justify-content:center;
    }

`
export const Card=styled.div`
    width:40%;
    height:500px;
    border-radius:50px;
    box-shadow:0px 0px 20px #e6f3ff;
    display:flex;
    flex-direction:column;
            @media only screen and (max-width:700px){
        width:85%;
        border-radius:20px;
        height:450px;
        margin:20px 0;
    }
      @media only screen and (min-width:700px) and (max-width:1200px){
        width:45%;
        border-radius:20px;
    }

`
export const Cardimg=styled.img`
    width:102px;
    height:160px;
    margin:30px auto;
`
export const Cardtxtsec=styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
    text-align:right;
`
export const Cardtxtbold=styled.h4`
   color:#1894ff;
   font-size:20px;
   line-height:2;
           @media only screen and (max-width:700px){
       font-size:15px
    }

`
export const Cardtxtlight=styled.p`
   font-size:15px;
   font-weight:lighter;
   line-height:2;
           @media only screen and (max-width:700px){
        font-size:12px;
    }

`
export const Cardbutton=styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`