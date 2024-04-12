import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-custom mt-10 pt-16 pb-12">
      <div className="max-w-8xl mx-auto px-6 py-2.5">
        <div className="flex flex-row justify-between">
          <div className="w-4/12">
            <img className="w-48 h-24" src={require("../images/logo_2.jpg")}></img>
          </div>
          <div className="flex flex-row justify-between w-8/12">
          <div className="text-white text-lg">
            <h1 className="text-xl font-semibold pb-4">Quick Links</h1>
            <ul className="flex flex-col gap-4">
              <li>About</li>
              <li>AI Assistants</li>
              <li>Publications</li>
              <li>Team</li>
              <li>How to use</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-white text-lg">
            <h1 className="text-xl font-semibold pb-4">AI Services</h1>
            <ul className="flex flex-col gap-4">
              <li>Classification of pulmonary abnormalities</li>
              <li>Detection of Pulmonary abnormalities</li>
              <li>Classification of COVID abnormalities</li>
              <li>Classification of skin disorders (Melanoma)</li>
              <li>Classification of skin disorders (Lyme disease)</li>
              <li>Classification of Cellular abnormalities (Histology)</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 text-white text-lg">
            <div className="flex flex-row gap-2">
              <svg className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
              <p className="text-white">med@comsys.kpi.ua</p>
            </div>
            <div className="flex flex-row gap-2">
              <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              <p className="text-white">+38 (044) 204-80-77</p>
            </div>
            <div className="flex flex-row gap-5">
              <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
              <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" /></svg>
              <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
