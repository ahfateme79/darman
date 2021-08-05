import styled from "styled-components";


export const ContactStyle=styled.section`
    width:90%;
    min-height:100vh;
    display:flex;
    margin:0 auto;
    justify-content:space-evenly;
    flex-wrap:wrap;
            @media only screen and (max-width:700px){
        min-height:120vh
    }

`
export const Heading=styled.h1`
    font-size:30px;
    @media only screen and (max-width:700px){
        font-size:15px;
        transform:translateY(40px)
    }
`
export const Mapsec=styled.div`
    width:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    @media only screen and (max-width:700px){
        width:80%;
        padding:50px 0;
    }
`
export const Map=styled.iframe`
    width:100%;
    height:500px;
    display:flex;
    justify-content:center;
    align-items:flex-end;
        @media only screen and (max-width:700px){
        height:300px;
        opacity:.6;
    }

`
export const Addresssec=styled.div`
    width:85%;
    min-height:150px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color:#fff;
    position:absolute;
    bottom:22%;
    border-radius:10px;
    flex-wrap:wrap;
        @media only screen and (max-width:700px){
        bottom:30px;
        width:98%;
        box-shadow:0 0 20px #e6f3ff;
    }
     @media only screen and (max-width:1000px){
        padding:20px;
    }

`
export const Address=styled.div`
    width:45%;
    height:auto;
    text-align:right;
    @media only screen and (max-width:1000px){
        width:100%;
        order:2;
    }

    
`
export const AddresHeading=styled.h5`
    color:black;
    font-weight:bolder;
    font-size:15px;
            @media only screen and (max-width:
                1000px){
        font-size:12px;
    }

`
export const Exactaddress=styled.address`
    font-weight:200;
    line-height:2;
    font-size:14px;
    margin:5px 0;
            @media only screen and (max-width:1000px){
        font-size:11px;
    }

`
export const Emailaddres=styled.ul`
    width:45%;
    height:auto;
    display:flex;
    flex-direction:column;
    @media only screen and (max-width:1000px){
        width:100%;
        flex-direction:row;
        order:1;
        justify-content:space-between;
    }

`
export const EmailPhone=styled.li`
    margin:10px 0;
    text-align:right;
`
export const Topicaddres=styled.h6`
    color:black;
    font-size:13px;
            @media only screen and (max-width:1000px){
        font-size:11px;
    }

`
export const Linkaddress=styled.a`
    color:#1894ff;
    margin:10px 0;
    line-height:2;
            @media only screen and (max-width:1000px){
        font-size:13px;
    }

`
export const Contactformsec=styled.div`
    width:40%;
        @media only screen and (max-width:700px){
        width:80%;
        height:70vh;
        padding:30px 0;
    }

`
export const Contactform=styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:100%;
`
export const Formlable=styled.label`
    text-align:right;
        @media only screen and (max-width:700px){
        font-size:13px;
    }

`

export const Inputs=styled.input`
    width:100%;
    height:50px;
    background-color:transparent;
    padding:10px;
    border:1px solid #e6f3ff;
    text-align:right;
    margin:20px 0;
    outline:none;
    border-radius:10px;
    &:focus{
        border-color:#1894ff;
    }

`
export const Textarea=styled.textarea`
    width:100%;
    height:200px;
    background-color:transparent;
    padding:10px;
    border:1px solid #e6f3ff;
    text-align:right;
    margin:20px 0;
    outline:none;
    border-radius:10px;
    &:focus{
        border-color:#1894ff;
    }

`
export const Btnsubmit=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Btn = styled.button`
    width:100%;
    height:52px;
    background-color:#fff;
    color: #1894ff;
    border: 2px solid #1894ff;
    border-radius:10px;
    font-size:16px;
    font-weight:bold;
    margin:10px 0;
    &:hover{
            background-color:#1894ff;
            color: white;
    }
`