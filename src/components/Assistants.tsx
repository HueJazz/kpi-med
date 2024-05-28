import React from 'react';
import { ASSISTANTS } from '../constants';

const Assistants: React.FC = () => {
    return (
        <div className="bg-about bg-cover pt-[484px] pb-32 ">
            <div className="max-w-8xl mx-auto pt-8 px-10 text-white" id="Assistants">
                <h1 className="text-center text-[40px] font-secondary font-bold">AI-assistants of the doctor</h1>
                <p className="text-center text-lg pb-16">The doctor's AI assistants created by us are built on the basis of modern AI models</p>
                <ul className="grid grid-cols-3 gap-1">
                    {ASSISTANTS[1].description && ASSISTANTS[1].description.split('\n').map((item, index) => (
                        <li key={index} className="flex flex-row group w-full items-center justify-between px-8 py-7 border rounded-sm border-white hover:bg-custom transition cursor-pointer">
                            <h1 className="text-xl font-secondary font-semibold transition">{item}</h1>
                            <svg className="w-5 h-5 fill-white group-hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    
    );  
}

export default Assistants;
