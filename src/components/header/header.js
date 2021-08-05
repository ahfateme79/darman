import { Buttons } from '../buttons/button'
import { HeaderStyle, LeftSecHead, BehindImg, RightSecHead, TextSec, Heading, HeadingPara, BtnsSection } from './headerstyle'
import Doctorbg from '../assets/img/Doctor-with-background.svg'
import Doctor from '../assets/img/doctor.svg'
import React, { useState } from 'react'



const Header = () => {
    const [windo, setWindo] = useState({
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setWindo({ width: window.innerWidth })
        }

        window.addEventListener('resize', handleResize)

    })
    const array = [
        {
            title: windo.width >= 700 ? 'عضویت داروخانه ها' : 'دانلود مستقیم اپ',
            color: windo.width>=700?'secondary':'primary',
            border: windo.width>=700?'solid':'none',
            textColor: windo.width>=700?'blue':'transparent',

        },
        {
            title: windo.width <= 700 ? 'عضویت داروخانه ها' : 'دانلود درمانیتو',
            color: windo.width>=700?'primary':'secondary',
            border: windo.width>=700?'none':'solid',
            textColor: windo.width>=700?'transparent':'blue',
        }

    ]

    return (
        <HeaderStyle>
            <LeftSecHead>
                <BehindImg src={windo.width <= 700 ? Doctor : Doctorbg} alt="doctor" />
            </LeftSecHead>
            <RightSecHead>
                <TextSec>
                    <Heading>اپلیکیشن درمانیتو</Heading>
                    <HeadingPara>{windo.width <= 700 ? 'سوپر اپلیکیشن حوزه درمان و سلامت' : 'درمانبتو،سامانه هوشمند درمان و سلامت'}</HeadingPara>
                </TextSec>
                <BtnsSection>
                    {
                        array.map((n, index) => {
                            return (
                                <Buttons key={index} order={n.order} btnColor={n.color} textColor={n.textColor} btnBoredr={n.border}>{n.title}</Buttons>
                            )
                        })
                    }
                </BtnsSection>
            </RightSecHead>
        </HeaderStyle>
    )
}
export default Header
