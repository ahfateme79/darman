import styled from "styled-components";
import Bg from '../../assets/img/subscription-bg.svg'

export const Membershipstyle = styled.section`
    width:100%;
    min-height:100vh;
    background-image:url(${Bg});
    background-repeat:no-repeat;
    background-position:center right;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
     @media only screen and (max-width:700px){
     background-image:none;
     height:110vh;
    }

`
export const Membersec = styled.div`
    width:80%;
    min-height:60vh;
    box-shadow:0px 0px 20px #e6f3ff;
    border-radius:20px;
    display:flex;
    align-items:center;
    position:relative;
    background-color:#fff;
   flex-wrap:wrap;
    @media only screen and (max-width:700px){
      width:90%;
      min-height:80vh;
      padding-bottom:40px;
    }

`
export const Memberimgsec = styled.div`
    width:45%;
    height:auto;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    padding-top:80px;
     @media only screen and (max-width:700px){
      width:100%;
    }

`
export const Memberimg = styled.img`
    width:406px;
    height:315px;
             @media only screen and (max-width:700px){
      width:262px;
      height:195px;
    }
@media only screen and (min-width:700px) and (max-width:1000px){
        width:300px
        }
`
export const Memberform = styled.div`
    width:55%;
    height:auto;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    @media only screen and (max-width:700px){
      width:100%;
    }

`