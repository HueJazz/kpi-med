import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="py-6">
            <div className="max-w-8xl mx-auto flex px-6 items-center justify-between">
                <img className="w-36 h-18" src={require("../images/logo.jpg")}></img>
                <div className="flex">
                    <ul className="flex gap-2 xl:gap-6 justify-center">
                        <li className="border-b-2 py-2 px-1 border-transparent hover:border-active group transition">
                            <p className="font-medium text-custom group-hover:text-active uppercase transition">Home</p>
                        </li>
                        <li className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent hover:border-active group transition">
                            <p className="font-medium text-custom group-hover:text-active uppercase transition">AI-Assistans</p>
                            <svg className="w-2.5 h-2.5 fill-custom group-hover:fill-active transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                        </li>
                        <li className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent hover:border-active group transition">
                            <p className="font-medium text-custom group-hover:text-active uppercase transition">AI-Services</p>
                            <svg className="w-2.5 h-2.5 fill-custom group-hover:fill-active transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                        </li>
                        <li className="border-b-2 py-2 px-1 border-transparent hover:border-active group transition">
                            <p className="font-medium text-custom group-hover:text-active uppercase transition">Publications</p>
                        </li>
                        <li className="border-b-2 py-2 px-1 border-transparent hover:border-active group transition">
                            <p className="font-medium text-custom group-hover:text-active uppercase transition">Team</p>
                        </li>
                        <li className="border-b-2 py-2 px-1 border-transparent hover:border-active group transition">
                            <p className="font-medium text-custom group-hover:text-active uppercase transition">How to use</p>
                        </li>
                        <li className="border-b-2 py-2 px-1 border-transparent hover:border-active group transition">
                            <p className="font-medium text-custom group-hover:text-active uppercase transition">About</p>
                        </li>
                        <li className="border-b-2 py-2 px-1 border-transparent hover:border-active group transition">
                            <p className="font-medium text-custom group-hover:text-active uppercase transition">Contact</p>
                        </li>
                    </ul>
                    <button className="bg-secondary text-custom font-medium py-2 px-6 ml-4 hover:bg-active hover:text-white uppercase transition">
                        Login
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Header;
