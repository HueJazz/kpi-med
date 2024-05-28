import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { MENU } from '../constants';
import Login from './Login';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {

    const [hoveredItem, setHoveredItem] = useState<string>('')
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const { t, i18n } = useTranslation();

    const navigate = useNavigate()
    const { pathname } = useLocation();
    const scroller = Scroll.scroller;
    
    const handleClick = async (id: string) => {
        if (pathname !== '/kpi-med') {
            setHoveredItem('');
            await navigate('/kpi-med');
            await scroller.scrollTo(id, { delay: 100, duration: 750, spy:true, smooth: true, offset: -88 });
        } else {
            setHoveredItem('');
            await scroller.scrollTo(id, { duration: 750, spy:true, smooth: true, offset: -88 });
        }
    };

    return (
        <div className="sticky top-0 z-50 bg-white shadow-header min-h-[70px] border-t-2 border-secondary">
        <div className="max-w-8xl mx-auto px-6 w-full">
                <ul className="flex gap-2 xl:gap-6 items-center justify-between">
                    {MENU.map((item, index) => (
                    <li key={index} className="group mt-3 pb-3 cursor-pointer"
                        onMouseEnter={() => setHoveredItem(item.title)} 
                        onMouseLeave={() => setHoveredItem('')}>
                            <div className="flex items-center gap-2 border-b-2 py-2 border-transparent group-hover:border-active transition"
                                onClick={() => {item.submenu || ['Contact', 'Publications', 'Home'].includes(item.title) ? handleClick(item.title) : item.link && navigate(item.link)}}>
                                    <p className="font-medium text-secondary group-hover:text-active text-[17px] transition"> {t(`subheader.${item.title}`)}</p>
                                    {item.submenu && <svg className="h-3 w-3 fill-custom group-hover:fill-active rotate-0 group-hover:-rotate-180 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>}
                            </div>
                            <div className={`${hoveredItem == item.title ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all z-10 absolute top-[68px] left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-8xl bg-white grid grid-cols-3 shadow-custom ${item.title === 'Services' ? 'gap-1': ''}`}>
                                {item.submenu &&  item.submenu.map((subitem, index) => (
                                    <div key={index} className={`flex flex-col items-start min-h-[240px] ${subitem.style} p-6 ${item.title === 'Services' ? 'bg-secondary text-custom': ''}`}>
                                        <h1 className="mb-4 text-xl font-medium">{t(`${item.title.toLowerCase()}.title.${subitem.title}`)}</h1>
                                        {subitem.subtitle && <h2 className="text-white text-3xl font-medium my-4">{t(`${item.title.toLowerCase()}.subtitle.${subitem.title}`)}</h2>}
                                        <p className="font-medium mb-2">{t(`${item.title.toLowerCase()}.description.${subitem.title}`)}</p>
                                        <button className={`text-lg py-1 px-2 mt-auto rounded-sm ${subitem.buttonStyle} transition ${item.title === 'Services' ? 'bg-primary hover:bg-active text-white': ''}`}>Learn More</button>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                    <li className="ml-12">
                        <svg className="fill-custom w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </li>
                    <li>
                        <button className="bg-secondary text-custom font-medium rounded py-2 px-6 hover:bg-active hover:text-white text-lg transition" 
                            onClick={() => { setLoginModal(true); document.body.style.overflow = 'hidden'}}>
                                {t('subheader.Login')}
                        </button>
                        <Login loginModal={loginModal} setLoginModal={setLoginModal}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
