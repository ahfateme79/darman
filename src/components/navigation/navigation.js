import { useState } from 'react'
import { Nvigation, BtnSec, Menu, MenuList, MenuListItems, Links, Closeopen, Closeopenicon } from './nvstyle'
import { Buttons } from '../buttons/button'
import Logosite from '../logo/logo'
import Open from '../assets/img/icon.svg'
import Close from '../assets/img/close.svg'



const arr = [
    {
        path: '/',
        txt: 'صفحه اصلی'
    },

    {
        path: '/membership',
        txt: 'عضویت داروخانه ها'
    },

    {
        path: '/questions',
        txt: 'درباره ما'
    },
    {
        path: '/contact',
        txt: 'تماس باما'
    },

]
const secondarr = [
    {
        path: '/',
        txt: 'صفحه اصلی'
    },

    {
        path: '/membership',
        txt: 'عضویت داروخانه ها'
    },

    {
        path: '/questions',
        txt: 'درباره ما'
    },
    {
        path: '/contact',
        txt: 'تماس باما'
    },
    {
        path: '/questions',
        txt: 'سوالات متداول'
    },
    {
        path: '/contact',
        txt: 'قوانین و شرایط'
    },

]

const Nav = () => {
    const [hambergur, setHambergur] = useState(false)


    const Handleclick = () => {
        setHambergur(!hambergur)
    }

    return (
        <Nvigation>
            <BtnSec><Buttons btnBoredr='none'>دانلود درمانیتو</Buttons>
            </BtnSec>
            <Closeopen onClick={Handleclick}>
                <Closeopenicon src={hambergur ? Close : Open} />
            </Closeopen>

            <Menu dispaly={hambergur ? "flex" : "none"}>
                <MenuList>
                    {
                        hambergur ?
                            secondarr.map((n, index) => {
                                return (
                                    <MenuListItems key={index}><Links to={n.path}>{n.txt}</Links></MenuListItems>
                                )
                            })
                            : arr.map((n, index) => {
                                return (
                                    <MenuListItems key={index}><Links to={n.path}>{n.txt}</Links></MenuListItems>
                                )
                            })
                    }
                </MenuList>
                <Buttons btnBoredr='none'>دانلود درمانیتو</Buttons>
            </Menu>
            <Logosite widthlogo='20%' jcontent="start" />
        </Nvigation>
    )
}
export default Nav