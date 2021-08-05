// import { useState } from "react"
import { Detailsques, Explain, Summary, Userquestionstyle } from "./userquestionstyle"





const Userquestions=()=>{

  const Questionarr = [
    {
        id:1,
      quise: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
      explain: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
   
    },
    {
        id:2,
      quise: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
      explain: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
  
    },
    {
        id:3,
      quise: "درمانیتو فقط در تهران و کرج فعال هست؟",
      explain: "خیر،ما هم اکنون در تهران در حال فعالیت هستیم",
    
    },
    {
        id:4,
      quise: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
      explain: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
   
    },
  ];

    
    return(
        <Userquestionstyle>
            {
                Questionarr.map(n=>{
                    return(
                        <Detailsques key={n.id}>
                            <Summary>{n.quise}</Summary>
                            <Explain>{n.explain}</Explain>
                        </Detailsques>
                    )
                })
            }
        </Userquestionstyle>
    )
}
export default Userquestions
