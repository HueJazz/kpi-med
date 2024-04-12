import React from 'react';

const Cards: React.FC = () => {
    return (
            <div className="max-w-8xl mx-auto px-6 pb-12">
                <div className="flex gap-5">
                    <div className="relative flex flex-col items-center px-12 pb-12 w-1/3 bg-custom -mt-24">
                        <div className="bg-white rounded-full p-5 mb-5 -mt-12">
                            <svg className="w-10 h-10 fill-custom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
                        </div>
                        <h1 className="text-white text-2xl font-semibold">Doctor Assistants</h1>
                        <p className="text-white py-4 text-center text-lg">Our artificial intelligence (AI) methods are already working as doctor assistants</p>
                        <button className="bg-white text-custom px-4 py-2 mt-2 uppercase hover:bg-active hover:text-white transition text-lg">Learn more</button>
                    </div>
                    <div className="relative flex flex-col items-center px-12 pb-12 w-1/3 bg-custom -mt-24">
                        <div className="bg-white rounded-full p-5 mb-5 -mt-12">
                            <svg className="w-10 h-10 fill-custom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>                        
                        </div>
                        <h1 className="text-white text-2xl font-semibold">Services</h1>
                        <p className="text-white py-4 text-center text-lg">Our artificial intelligence (AI) services are ready to use anywhere anytime</p>
                        <button className="bg-white text-custom px-4 py-2 mt-2 uppercase hover:bg-active hover:text-white transition text-lg">Learn more</button>
                    </div>
                    <div className="relative flex flex-col items-center px-12 pb-12 w-1/3 bg-custom -mt-24">
                        <div className="bg-white rounded-full p-5 mb-5 -mt-12">
                            <svg className="w-10 h-10 fill-custom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>                        
                        </div>
                        <h1 className="text-white text-2xl font-semibold">Publications</h1>
                        <p className="text-white py-4 text-center text-lg">Our AI services are built on the basis of our thorough scientific research</p>
                        <button className="bg-white text-custom px-4 py-2 mt-2 uppercase hover:bg-active hover:text-white transition text-lg">Learn more</button>
                    </div>
                </div>
            </div>
    );  
}

export default Cards;
