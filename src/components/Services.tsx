import React from 'react';
import { SERVICES } from '../constants';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Cards: React.FC = () => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate()

    return (
        <div className="relative max-w-8xl mx-auto px-10 pt-16 -mb-[440px]">
            <h1 className="text-center text-[40px] font-secondary pt-8 text-custom font-bold" id="Services">AI Services</h1>
            <p className="text-center text-lg pb-16 text-custom">We offer AI services for use in various fields of medicine</p>
            <ul className="grid grid-cols-3 gap-7">
                {SERVICES.map((item, index) => (
                    <li key={index} className="group cursor-pointer" onClick={() => {navigate(`services/${item.title}`)}}>
                        <div className="relative overflow-hidden max-h-[240px] h-[40vh]">
                            <img
                                loading="lazy"
                                src={item.src}
                                alt={item.title}
                                className="object-cover h-full rounded-t scale-100 group-hover:scale-105 transition absolute inset-0"
                            /> 
                        </div>
                        <div className="flex flex-col bg-white border border-[#cddeee] rounded-b p-8 min-h-[352px]">
                            <h1 className="text-2xl font-secondary font-semibold text-custom group-hover:text-active transition">{t(`services.title.${item.title}`)}</h1>
                            <p className="py-6">{t(`services.description.${item.title}`)}</p>
                            <div className="flex flex-row gap-3 p-4 rounded items-center bg-assistants mt-auto group-hover:bg-active transition w-1/2">
                                <p className="text-white">Read More</p>
                                <svg className="fill-white h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cards;
