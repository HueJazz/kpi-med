import React from 'react';

const Cards: React.FC = () => {
    return (
        <div className="max-w-8xl mx-auto px-10 pt-6 pb-10">
            <h1 className="text-center text-5xl pb-1 pt-8 font-secondary font-bold text-custom" id="ai-services">AI Services</h1>
            <p className="text-center text-2xl pb-12 text-custom">We offer AI services for use in various fields of medicine</p>
            <ul className="grid grid-cols-3 gap-5">
                {[
                    { src: require("../images/classification.webp"), alt: "Classification", text: "Classification of pulmonary abnormalities" },
                    { src: require("../images/detection.webp"), alt: "Detection", text: "Detection of Pulmonary abnormalities" },
                    { src: require("../images/covid.webp"), alt: "Covid", text: "Classification of COVID abnormalities" },
                    { src: require("../images/melanoma.webp"), alt: "Melanoma", text: "Classification of skin disorders (Melanoma)" },
                    { src: require("../images/lyme.webp"), alt: "Lyme", text: "Classification of skin disorders (Lyme disease)" },
                    { src: require("../images/histology.webp"), alt: "Histology", text: "Classification of Cellular abnormalities (Histology)" }
                ].map((item, index) => (
                    <li key={index} className="group relative w-full max-h-[240px] h-[40vh] overflow-hidden">
                        <img
                            loading="lazy"
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-60 group-hover:opacity-90 transition"></div>
                        <h1 className="absolute left-0 bottom-0 text-2xl font-secondary px-5 py-4 font-semibold text-white">{item.text}</h1>
                    </li>
                ))}
            </ul>
        </div>
    );  
}

export default Cards;
