import React from 'react';
import { CARDS } from '../constants';

const Cards: React.FC = () => {
    return (
        <div className="max-w-8xl mx-auto px-10">
            <ul className="flex gap-5">
                {CARDS.map((card, index) => (
                    <li key={index} className="relative flex flex-col rounded items-center px-12 pb-8 w-1/3 bg-primary -mt-52">
                        <div className="bg-white rounded-full p-5 mb-5 -mt-10">
                            <img className="w-14 h-14" src={card.src}></img>
                        </div>
                        <h1 className="text-white text-2xl font-semibold">{card.title}</h1>
                        <p className="text-white py-4 text-center">{card.description}</p>
                        <button className="bg-white text-custom rounded px-4 py-2 mt-auto hover:bg-active hover:text-white transition text-lg">Learn more</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cards;