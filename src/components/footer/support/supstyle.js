import styled from "styled-components";

export const Supstyle = styled.section`
    width:100%;
    min-height:130px;
    border-color:#1894ff;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color:#1894ff;
    flex-wrap:wrap;
          @media only screen and (max-width:700px){
      width:100%;
      flex-direction:column;
      min-height:230px;
    }

`
export const Supbtnsec = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
     @media only screen and (max-width:700px){
      width:100%;
      order:2;
      align-items:center;
    }

`
export const Supbtn = styled.button`
    width:260px;
    height:52px;
    display:flex;
    background-color:#2361b5;
    border:none;
    border-radius:10px;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        background-color:blue;
    }
          @media only screen and (max-width:700px){
      margin:10px auto;
    }


`
export const Supimg = styled.img`
    width:20px;
    height:20px;
    margin:0 10px;
`
export const Suptexts = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
      @media only screen and (max-width:700px){
      width:100%;
      order:1;
      flex-direction:column;
    }

`
export const Suptextbold = styled.h3`
    margin:0 20px;
          @media only screen and (max-width:700px){
      order:1;
      margin:20px auto;
      font-size:15px;
    }
        @media only screen and (min-width:700px) and (max-width:1000px){
        font-size:14px;
    }


`
export const Suptextlight = styled.p`
    font-size:14px;
          @media only screen and (max-width:700px){
      order:2;
      font-size:11px;
    }
        @media only screen and (min-width:700px) and (max-width:1000px){
        font-size:12px;
    }


`
