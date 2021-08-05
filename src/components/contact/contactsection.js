import { Bluebackgroun } from "../bluesections/bluesectionstyle"
import { AddresHeading, Address, Addresssec, Btn, Btnsubmit, Contactform, Contactformsec, ContactStyle, Emailaddres, EmailPhone, Exactaddress, Formlable, Heading, Inputs, Linkaddress, Map, Mapsec, Textarea, Topicaddres } from "./contactstyle"

const Formarr = [
    {
        type: 'text',
        placeholder: 'ایمیل یا شماره همراه',
        lable: 'نام و نام خانوادگی'
    },
    {
        type: 'text',
        placeholder: 'ایمیل یا شماره همراه',
        lable: 'ایمیل یا شماره همراه'
    },
    {
        type: 'textarea',
        placeholder: 'ایمیل یا شماره همراه',
        lable: 'پیام شما'
    },
]

const Array=[
    {
        topic:'ایمیل',
        link:'info@nahiraTech.com'
    },
    {
        topic:'شماره ثابت',
        link:'۰۲۱-۴۴۲۱۹۶۷۱'
    },
]

const Contacts = () => {
    return (
        <>
            <Bluebackgroun content="center"><Heading>تماس با ما</Heading></Bluebackgroun>
            <ContactStyle>
                <Mapsec>
                    <Map src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1627187721358!5m2!1sen!2s" allowfullscreen="" loading="lazy"
                    >
                    </Map>
                    <Addresssec>
                        <Address>
                            <AddresHeading>آدرس</AddresHeading>
                            <Exactaddress>تهران،طرشت،خیابان شهید چوب تراش،خیابان شهید حسین مردی،بن بست پنجم، پاتک۱۵،واحد ۱</Exactaddress>
                        </Address>
                        <Emailaddres>
                            {
                                Array.map(n=>{
                                    return(
                                        <EmailPhone>
                                            <Topicaddres>{n.topic}</Topicaddres>
                                            <Linkaddress href="#">{n.link}</Linkaddress>
                                        </EmailPhone>
                                    )
                                })
                            }
                        </Emailaddres>
                    </Addresssec>

                </Mapsec>
                <Contactformsec>
                    <Contactform>
                        {
                            Formarr.map(n => {
                                return (
                                    <>
                                        <Formlable>{n.lable}</Formlable>
                                        {
                                            n.type === 'text' ? <Inputs type={n.type} placeholder={n.placeholder} /> : <Textarea placeholder={n.placeholder} />
                                        }
                                    </>
                                )
                            })
                        }
                        <Btnsubmit>
                            <Btn>ارسال پیام</Btn>
                        </Btnsubmit>
                    </Contactform>
                </Contactformsec>

            </ContactStyle>
        </>
    )
}
export default Contacts