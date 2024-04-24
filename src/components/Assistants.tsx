import React from 'react';

const Assistants: React.FC = () => {
    return (
        <div className="bg-tertiary my-10 pt-8 pb-16">
            <div className="max-w-8xl mx-auto pt-8 px-10" id="ai-assistants">
                <h1 className="text-center text-5xl pb-1 font-secondary font-bold text-custom">AI-assistants of the doctor</h1>
                <p className="text-center text-2xl pb-12 text-custom">The doctor's AI assistants created by us are built on the basis of modern AI models</p>
                <ul className="grid grid-cols-3 gap-5">
                    <li className="flex flex-row group w-full items-center justify-center border border-custom hover:bg-custom transition">
                        <h1 className="text-2xl font-secondary px-5 py-4 font-semibold text-custom group-hover:text-white transition">DenseNet</h1>
                        <svg className="w-5 h-5 fill-custom group-hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </li>
                    <li className="flex flex-row group w-full items-center justify-center border border-custom hover:bg-custom transition">
                        <h1 className="text-2xl font-secondary px-5 py-4 font-semibold text-custom group-hover:text-white transition">YOLO</h1>
                        <svg className="w-5 h-5 fill-custom group-hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </li>
                    <li className="flex flex-row group w-full items-center justify-center border border-custom hover:bg-custom transition">
                        <h1 className="text-2xl font-secondary px-5 py-4 font-semibold text-custom group-hover:text-white transition">ResNet</h1>
                        <svg className="w-5 h-5 fill-custom group-hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </li>
                    <li className="flex flex-row group w-full items-center justify-center border border-custom hover:bg-custom transition">
                        <h1 className="text-2xl font-secondary px-5 py-4 font-semibold text-custom group-hover:text-white transition">Inception</h1>
                        <svg className="w-5 h-5 fill-custom group-hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </li>
                    <li className="flex flex-row group w-full items-center justify-center border border-custom hover:bg-custom transition">
                        <h1 className="text-2xl font-secondary px-5 py-4 font-semibold text-custom group-hover:text-white transition">InceptionResNet</h1>
                        <svg className="w-5 h-5 fill-custom group-hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </li>
                    <li className="flex flex-row group w-full items-center justify-center border border-custom hover:bg-custom transition">
                        <h1 className="text-2xl font-secondary px-5 py-4 font-semibold text-custom group-hover:text-white transition">EfficientNet</h1>
                        <svg className="w-5 h-5 fill-custom group-hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </li>
                    <li className="flex flex-row group w-full items-center justify-center border border-custom hover:bg-custom transition">
                        <h1 className="text-2xl font-secondary px-5 py-4 font-semibold text-custom group-hover:text-white transition">Xception</h1>
                        <svg className="w-5 h-5 fill-custom group-hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </li>
                    <li className="flex flex-row group w-full items-center justify-center border border-custom hover:bg-custom transition">
                        <h1 className="text-2xl font-secondary px-5 py-4 font-semibold text-custom group-hover:text-white transition">MobileNet</h1>
                        <svg className="w-5 h-5 fill-custom group-hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </li>
                </ul>
            </div>
        </div>
    
    );  
}

export default Assistants;
