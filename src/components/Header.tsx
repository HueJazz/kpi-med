import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate()

    const handleLanguage = (e:any) => {
        i18n.changeLanguage(e.target.value)
    }

  return (
    <div className="bg-white" id="top">
        <div className="max-w-8xl mx-auto px-6 min-h-[106px]" id="Home">
            <div className="flex justify-between items-center py-4 h-[106px]">
                <img className="h-3/4" src={require("../images/logo_1.jpg")} onClick={() => navigate('/kpi-med')}></img>
                <ul className="flex items-center gap-12 mr-32">
                    <li className="flex items-center gap-3">
                        <img className="w-8 h-8" src={require("../images/icon_appointment.png")}></img>
                        <div className="flex flex-col">
                            <p className="text-sm">{t('header.Call')}</p>
                            <p className="text-active font-semibold">+38 (044) 204-80-77</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-3">
                        <img className="w-8 h-8" src={require("../images/icon_email.png")}></img>
                        <div className="flex flex-col">
                            <p className="text-sm">{t('header.Email')}</p>
                            <p className="text-active font-semibold">med@comsys.kpi.ua</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-3">
                        <img className="w-8 h-8" src={require("../images/icon_mychart.png")}></img>
                        <p className="text-sm">{t('header.Chart')}</p>
                    </li>
                </ul>
                <div className="relative flex items-center gap-3">
                    <div className="flex items-center justify-between border border-black bg-white rounded min-w-[180px]">
                        <select className="px-6 pr-2 py-2 w-full" onChange={handleLanguage}>
                            <option value="en">English</option>
                            <option value="ua">Українська</option>
                        </select>
                    </div>
                    <svg className="absolute top-1/2 -translate-y-1/2 left-0 ml-2 w-4 h-4 fill-custom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>                        
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
