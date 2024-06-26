import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from "./FormInput";
import { CONTACT } from "../constants";
import { FocusContext } from "./context/FocusContext";

export type ContactFormData  = {
    name: string;
    email: string;
    number: string;
    message: string;
  };

export const emailPattern = {
    value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
    message: 'Enter a valid email address.',
};

const Contact: React.FC = () => {

    const [blurInputs, setBlurInputs] = React.useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm<ContactFormData>();
    
      const onSubmit: SubmitHandler<ContactFormData> = (data) => { console.log(data); reset(); setBlurInputs(!blurInputs)}

    return(
        <div className="max-w-8xl mx-auto px-10 pt-48 pb-16">
            <h1 className="text-center text-[40px] font-secondary pt-8 text-custom font-bold" id="Contact">Contact Us</h1>
            <div className="flex flex-row gap-20 pt-16">
                    <p className="w-5/12"><iframe className="w-full h-full" title="KPI" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Ukraine,Kyiv,KPI&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://www.googlemapsgenerator.com">embed google maps</a> and <a href="https://unoregler.se/">uno regler</a></iframe></p>
                    <FocusContext.Provider value={blurInputs}>               
                        <form className="flex flex-col w-5/12" onSubmit={handleSubmit(onSubmit)}>
                            {CONTACT.map((item, index) => (
                                <FormInput
                                    key={index} 
                                    id={item.id}
                                    label={item.label}
                                    isTextarea={index === CONTACT.length - 1}
                                    register={register}
                                    rules={{
                                        required: 'You must enter your email address.',
                                        ...(item.id === 'email' ? { pattern: emailPattern } : {})
                                    }}
                                    errors={errors} />
                            ))}
                            <button className="mt-9 bg-active text-white px-4 py-3 hover:bg-custom transition uppercase text-lg" type="submit">
                                Contact our team
                            </button>
                        </form>
                    </FocusContext.Provider> 
                <div className="flex flex-col justify-start w-2/12 text-lg">
                    <div className="flex flex-col mb-4">
                        <h1 className="text-xl font-semibold">Email</h1>
                        <p className="">med@comsys.kpi.ua</p>
                    </div>
                    <div className="flex flex-col mb-4">
                        <h1 className="text-xl font-semibold">Phone</h1>
                        <p className="">+38 (044) 204-80-77</p>
                    </div>
                    <div className="flex flex-col mb-6">
                        <h1 className="text-xl font-semibold">Address</h1>
                        <p className="">201, building 18</p>
                        <p className="">37, Prospect Beresteiskyi</p>
                        <p className="">Kyiv, Ukraine</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <svg className="w-5 h-5 fill-custom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                        <svg className="w-5 h-5 fill-custom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" /></svg>
                        <svg className="w-5 h-5 fill-custom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact