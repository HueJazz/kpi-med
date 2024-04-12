import React from 'react';

const Cards: React.FC = () => {
    return (
        <div className="max-w-8xl mx-auto px-6 pt-16 pb-12">
            <h1 className="text-center text-5xl pb-1 font-secondary font-bold text-custom">AI Services</h1>
            <p className="text-center text-2xl pb-12 text-custom">We offer AI services for use in various fields of medicine</p>
            <ul className="grid grid-cols-3 gap-5">
                <li className="group relative w-full">
                        <img loading="lazy" src={require("../images/classification.jpg")} alt="Classification" className="w-full"></img>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-60 group-hover:opacity-90 transition"></div>
                    <h1 className="absolute left-0 bottom-0 text- text-2xl font-secondary px-5 py-4 font-semibold text-white">Classification of pulmonary abnormalities</h1>
                </li>
                <li className="group relative w-full">
                        <img loading="lazy" src={require("../images/detection.jpg")} alt="Detection" className="w-full"></img>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-60 group-hover:opacity-90 transition"></div>
                    <h1 className="absolute left-0 bottom-0 text-2xl font-secondary px-5 py-4 font-semibold text-white">Detection of Pulmonary abnormalities</h1>
                </li>
                <li className="group relative w-full">
                        <img loading="lazy" src={require("../images/covid.jpg")} alt="Covid" className="w-full"></img>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-60 group-hover:opacity-90 transition"></div>
                    <h1 className="absolute left-0 bottom-0 text-2xl font-secondary px-5 py-4 font-semibold text-white">Classification of COVID abnormalities</h1>
                </li>
                <li className="group relative w-full">
                        <img loading="lazy" src={require("../images/melanoma.jpg")} alt="Melanoma" className="w-full"></img>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-60 group-hover:opacity-90 transition"></div>
                    <h1 className="absolute left-0 bottom-0 text-2xl font-secondary px-5 py-4 font-semibold text-white">Classification of skin disorders (Melanoma)</h1>
                </li>
                <li className="group relative w-full">
                        <img loading="lazy" src={require("../images/lyme.jpg")} alt="Lyme" className="w-full"></img>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-60 group-hover:opacity-90 transition"></div>
                    <h1 className="absolute left-0 bottom-0 text-2xl font-secondary px-5 py-4 font-semibold text-white">Classification of skin disorders (Lyme disease)</h1>
                </li>
                <li className="group relative w-full">
                        <img loading="lazy" src={require("../images/histology.jpg")} alt="Histology" className="w-full"></img>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-60 group-hover:opacity-90 transition"></div>
                    <h1 className="absolute left-0 bottom-0 text-2xl font-secondary px-5 py-4 font-semibold text-white">Classification of Cellular abnormalities (Histology)</h1>
                </li>
            </ul>
        </div>
    );  
}

export default Cards;
