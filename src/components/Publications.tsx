import React from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
    return (
        <div className="bg-secondary py-16">
            <div className="max-w-8xl mx-auto px-10 pt-8 pb-12" id="Publications">
                <div className="flex flex-row items-center justify-between pb-16">
                    <h1 className="text-center text-[40px] font-secondary font-semibold text-custom">Publications</h1>
                    <p className="text-center font-thin text-lg text-custom w-1/2">Our AI services are built on the basis of our thorough scientific research,
                        the results of which have been published in world-class professional scientific journals
                    </p>
                </div>
                <ul className="grid grid-cols-4 gap-8 -mb-64">
                    {PUBLICATIONS.map((item, index) => (
                        <li key={index} className="group cursor-pointer">
                            <div className="group relative overflow-hidden max-h-[200px] h-[40vh]">
                                <img
                                    loading="lazy"
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full object-cover rounded-t scale-100 group-hover:scale-105 transition"
                                />
                            </div>
                            <div className="flex flex-col border bg-white border-[#cddeee] p-6 min-h-52 rounded-b">
                                <h1 className="text-[17px] font-secondary font-bold text-custom mb-8">{item.title}</h1>
                                <div className="flex flex-row gap-2 mt-auto items-center">
                                    <p className="underline text-[#4497cb] group-hover:text-active transition">Learn More</p>
                                    <svg className="fill-[#4497cb] h-4 w-4 group-hover:fill-active transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );  
}

export default Publications;
