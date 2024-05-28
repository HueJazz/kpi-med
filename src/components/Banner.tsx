import React from 'react';

const Header: React.FC = () => {
    return (
            <div>
                <div className="relative bg-banner bg-cover bg-center">
                    <div className="absolute bg-opacity-70 bg-custom h-full w-full"></div>
                    <div className="max-w-8xl mx-auto px-6 relative flex flex-col items-center pt-44 pb-44">
                        <h1 className="text-white text-6xl font-bold font-secondary w-4/5 text-center mb-6">Artificial intelligence (AI) takes care of your health</h1>
                        <p className="text-white text-[22px] w-4/5 text-center">Our artificial intelligence (AI) methods allow your doctor to treat your health more carefully</p>
                        {/* <button className="text-white bg-active text-xl uppercase px-4 py-2 mt-5 hover:bg-custom transition">Details</button> */}
                    </div>
                </div>
                <div className="bg-assistants h-28"></div>
            </div>
    );  
}

export default Header;
