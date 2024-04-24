import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";
import * as Scroll from 'react-scroll';

const Header: React.FC = () => {

    const [hoveredItem, setHoveredItem] = useState<string>('')

    const navigate = useNavigate()
    const { pathname } = useLocation();
    const scroller = Scroll.scroller;

    const goToHomeAndScroll = async (id:string) => {
        await navigate('/');
        await scroller.scrollTo(id, {
          duration: 750,
          delay: 100,
          smooth: true,
          offset: -88
        });
      };

    return (
        <div className="sticky top-0 z-50 max-w-8xl mx-auto flex py-1 px-6 items-center justify-between bg-white w-full shadow-header">
            {pathname == '/' ?
                <Link to="top" spy={true} smooth={true} offset={-88} duration={750}>
                    <img className="w-36 h-18" src={require("../images/logo.jpg")}></img>
                </Link> :
                <NavLink to="/">
                    <img className="w-36 h-18" src={require("../images/logo.jpg")}></img>
                </NavLink>}
            <div className="flex items-center">
                <ul className="flex gap-2 xl:gap-6 justify-center">
                    <li className="group py-5"
                        onMouseEnter={() => setHoveredItem('about')} onClick={() => setHoveredItem('')} onMouseLeave={() => setHoveredItem('')}>
                        <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                            <p className="font-medium text-custom group-hover:text-active uppercase transition">About</p>
                            <svg className="w-2.5 h-2.5 fill-custom group-hover:fill-active transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                        </div>
                        {hoveredItem == 'about' ?
                            <div className="z-10 absolute top-[86px] left-6 w-[calc(100%-48px)] bg-white grid grid-cols-3 shadow-custom">
                                <div className="flex flex-col items-start bg-white p-6">
                                    <h1 className="mb-4 text-xl font-medium text-custom">Overview</h1>
                                    <p className="text-gray-600 font-medium">
                                        The modern medical community is well aware of the potential of artificial intelligence (AI) methods.
                                        The U.S. Food and Drug Administration (FDA) has approved over 40 AI algorithms and devices for practical
                                        medical use. In the future, physicians not only need to be prepared to use AI technologies but also to shape their future development.</p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                                <div className="flex flex-col items-start gap-1 bg-[#f7f7f7] p-6">
                                    <h1 className="mb-4 text-xl font-medium text-custom">Why KPI MED?</h1>
                                    <p className="text-gray-600 font-medium">
                                        Using advanced "smart" tools based on AI methods can significantly aid in analyzing vast amounts of medical data, including 1D acoustic,
                                        2D radiographic, 3D CT/MRI scans, and multi-channel EEGs. These tools serve as additional aids for experts in the complex and
                                        time-consuming process of disease analysis and detection.</p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                                <div className="flex flex-col items-start bg-active p-6">
                                    <p className="text-white font-medium text-xl">Showcasing AI-Driven Disease Detection</p>
                                    <h1 className="text-white text-3xl font-medium my-4">Transform Medical Diagnostics with AI</h1>
                                    <p className="text-white font-medium">Experience the future of healthcare with our AI platform. Enable medical professionals to deploy specialized AI services,
                                        process vast medical data, and enhance disease detection workflows. Embrace innovation and elevate patient care today.</p>
                                    <button className="text-active bg-white text-lg py-1 px-2 mt-3 hover:bg-custom hover:text-white transition">Learn More</button>
                                </div>
                            </div> : null}
                    </li>
                    <li className="group py-5"
                        onMouseEnter={() => setHoveredItem('services')} onMouseLeave={() => setHoveredItem('')}>
                        {pathname !== '/' ?
                            <button onClick={() => { setHoveredItem(''); goToHomeAndScroll('ai-services') }}>
                                <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                                    <p className="font-medium text-custom group-hover:text-active uppercase transition">AI-Services</p>
                                    <svg className="w-2.5 h-2.5 fill-custom group-hover:fill-active transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                </div>
                            </button> :
                            <Link to="ai-services" spy={true} smooth={true} offset={-88} duration={750} onClick={() => setHoveredItem('')}>
                                <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                                    <p className="font-medium text-custom group-hover:text-active uppercase transition">AI-Services</p>
                                    <svg className="w-2.5 h-2.5 fill-custom group-hover:fill-active transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                </div>
                            </Link>}
                        {hoveredItem == 'services' ?
                            <div className="z-10 absolute top-[86px] left-6 w-[calc(100%-48px)] bg-white grid grid-cols-3 gap-1 shadow-custom">
                                <div className='bg-[#f7f7f7] p-6'>
                                    <h1 className="text-custom text-xl font-medium">Classification of pulmonary abnormalities</h1>
                                    <p className="text-gray-600 font-medium mt-3">This focuses on categorizing various abnormalities found in the lungs, aiding in diagnostics and treatment planning.</p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                                <div className='bg-[#f7f7f7] p-6'>
                                    <h1 className="text-custom text-xl font-medium">Detection of Pulmonary abnormalities</h1>
                                    <p className="text-gray-600 font-medium mt-3">This emphasizes the identification and early detection of pulmonary issues to ensure timely medical interventions.</p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                                <div className='bg-[#f7f7f7] p-6'>
                                    <h1 className="text-custom text-xl font-medium">Classification of COVID abnormalities</h1>
                                    <p className="text-gray-600 font-medium mt-3">This categorizes abnormalities specifically related to COVID-19, aiding in understanding and managing the disease.</p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                                <div className='bg-[#f7f7f7] p-6'>
                                    <h1 className="text-custom text-xl font-medium">Classification of skin disorders (Melanoma)</h1>
                                    <p className="text-gray-600 font-medium mt-3">Focuses on categorizing skin abnormalities, particularly Melanoma, to facilitate early diagnosis and treatment.</p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                                <div className='bg-[#f7f7f7] p-6'>
                                    <h1 className="text-custom text-xl font-medium">Classification of skin disorders (Lyme disease)</h1>
                                    <p className="text-gray-600 font-medium mt-3">This involves categorizing skin issues related to Lyme disease, assisting in timely diagnosis and management.</p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                                <div className='bg-[#f7f7f7] p-6'>
                                    <h1 className="text-custom text-xl font-medium">Classification of Cellular abnormalities (Histology)</h1>
                                    <p className="text-gray-600 font-medium mt-3">This focuses on categorizing cellular abnormalities, especially in histology, to enhance understanding and research.</p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                            </div> : null}
                    </li>
                    <li className="group py-5"
                        onMouseEnter={() => setHoveredItem('assistants')} onMouseLeave={() => setHoveredItem('')}>
                        {pathname !== '/' ?
                            <button onClick={() => { setHoveredItem(''); goToHomeAndScroll('ai-assistants') }}>
                                <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                                    <p className="font-medium text-custom group-hover:text-active uppercase transition">AI-Assistants</p>
                                    <svg className="w-2.5 h-2.5 fill-custom group-hover:fill-active transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                </div>
                            </button> :
                            <Link to="ai-assistants" spy={true} smooth={true} offset={-88} duration={750} onClick={() => setHoveredItem('')}>
                                <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                                    <p className="font-medium text-custom group-hover:text-active uppercase transition">AI-Assistants</p>
                                    <svg className="w-2.5 h-2.5 fill-custom group-hover:fill-active transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                </div>
                            </Link>}
                        {hoveredItem == 'assistants' ?
                            <div className="z-10 absolute top-[86px] left-6 w-[calc(100%-48px)] bg-white grid grid-cols-3 shadow-custom">
                                <div className="flex flex-col items-start bg-white p-6">
                                    <h1 className="mb-4 text-xl font-medium text-custom">Overview</h1>
                                    <p className="text-gray-600 font-medium">AI-assistants have revolutionized various domains by offering efficient and
                                        intelligent solutions to complex tasks. These assistants leverage state-of-the-art neural network architectures to perform
                                        tasks ranging from image recognition and object detection to natural language processing and data analysis. </p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                                <div className="flex flex-col items-start gap-1 bg-[#f7f7f7] p-6">
                                    <h1 className="mb-4 text-xl font-medium text-custom">AI-Assistants</h1>
                                    <p className="text-custom font-medium">DenseNet</p>
                                    <p className="text-custom font-medium">YOLO</p>
                                    <p className="text-custom font-medium">ResNet</p>
                                    <p className="text-custom font-medium">Inception</p>
                                    <p className="text-custom font-medium">InceptionResNet</p>
                                    <p className="text-custom font-medium">EfficientNet</p>
                                    <p className="text-custom font-medium">Xception</p>
                                    <p className="text-custom font-medium">MobileNet</p>
                                    <button className="text-white bg-custom text-lg py-1 px-2 mt-3 hover:bg-active transition">Learn More</button>
                                </div>
                                <div className="flex flex-col items-start bg-active p-6">
                                    <p className="text-white font-medium text-xl">Choose AI-Assistants, Choose Cutting-Edge Solutions</p>
                                    <h1 className="text-white text-3xl font-medium my-4">Empower Your Operations with AI-Assistants</h1>
                                    <p className="text-white font-medium">Unlock the potential of AI-assistants with our advanced solutions. Discover the right AI architecture for your needs,
                                        understand its capabilities, and elevate your business processes to new heights. Take control of your digital transformation journey today.</p>
                                    <button className="text-active bg-white text-lg py-1 px-2 mt-3 hover:bg-custom hover:text-white transition">Learn More</button>
                                </div>
                            </div> : null}
                    </li>
                    <li className="group py-5">
                        <NavLink to="/publications">
                            <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                                <p className="font-medium text-custom group-hover:text-active uppercase transition">Publications</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="group py-5">
                        <NavLink to="/team">
                            <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                                <p className="font-medium text-custom group-hover:text-active uppercase transition">Team</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="group py-5">
                        <NavLink to="/faq">
                            <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                                <p className="font-medium text-custom group-hover:text-active uppercase transition">How to use</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="group py-5">
                        {pathname !== '/' ?
                            <button onClick={() => { setHoveredItem(''); goToHomeAndScroll('contact') }}>
                                <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                                    <p className="font-medium text-custom group-hover:text-active uppercase transition">Contact</p>
                                </div>
                            </button> :
                        <Link to="contact" spy={true} smooth={true} offset={-88} duration={750}>
                            <div className="flex items-center gap-2 border-b-2 py-2 px-1 border-transparent group-hover:border-active transition">
                                <p className="font-medium text-custom group-hover:text-active uppercase transition">Contact</p>
                            </div>
                        </Link>}
                    </li>
                </ul>
                <button className="bg-secondary text-custom font-medium py-3 px-6 ml-4 hover:bg-active hover:text-white uppercase transition" onClick={() => navigate("/login")}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Header;
