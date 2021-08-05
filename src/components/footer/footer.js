import { Appimg, Donapps, Download, Downloadsec, Footerboldtext, Footerlighttext, Footerlist, Footerlistitem, Footerlistitemlink, Footerlistsec, Footerlogosec, Footersec, Footerstyle, Footertextsec, Icons, Linkicon, Socialmedia, Toptext } from "./footerstyle"
import Support from "./support/support"
import sibapp from '../assets/img/sib-app-black.svg'
import blackbazar from '../assets/img/black-bazar.svg'
import Logosite from "../logo/logo"


const arr = [sibapp, blackbazar]
const array = [
    { toptext: "صفحات درمانیتو", list: ['تماس با ما', 'درباره ما', 'سوالات متداول', 'قوانین و شرایط'] },
    { toptext: "خدمات درمانیتو", list: ['داروخانه آنلاین', 'فروشگاه آنلاین', 'ویزیت آنلاین', 'پرونده پزشکی'] }
]

const Arricon = ['instagram', 'twitter', 'linkedin']

const Footre = () => {
    return (
        <Footerstyle>
            <Support />
            <Footersec>
                <Download>
                    <Toptext>دانلود درمانیتو</Toptext>
                    <Downloadsec>
                        {
                            arr.map(n => {
                                return (
                                    <Donapps href="#">
                                        <Appimg src={n} alt="app" />
                                    </Donapps>
                                )
                            })
                        }
                    </Downloadsec>
                </Download>
                <Footerlistsec>
                    {
                        array.map(n => {
                            return (
                                <Footerlist>
                                    <Toptext>{n.toptext}</Toptext>
                                    {
                                        n.list.map(h => {
                                            return (
                                                <Footerlistitem>
                                                    <Footerlistitemlink href="#">{h}</Footerlistitemlink>
                                                </Footerlistitem>
                                            )
                                        })
                                    }
                                </Footerlist>
                            )
                        })
                    }
                </Footerlistsec>
                <Footerlogosec>
                    <Logosite widthlogo="100%" jcontent="end"/>
                    <Footertextsec>
                        <Footerboldtext>سوپر اپلیکیشن حوزه درمان وسلامت</Footerboldtext>
                        <Footerlighttext>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</Footerlighttext>
                    </Footertextsec>
                    <Socialmedia>
                        {
                            Arricon.map(n => {
                                return (
                                    <Linkicon href="#"><Icons className={`icon-${n}`}/></Linkicon>

                                )
                            })
                        }
                    </Socialmedia>
                </Footerlogosec>
            </Footersec>
        </Footerstyle>
    )
}
export default Footre
