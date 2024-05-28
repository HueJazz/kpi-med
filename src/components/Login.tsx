import React, { useRef } from 'react';
import FormInput from './FormInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReactDOM from 'react-dom'
import { LOGIN } from '../constants';
import { useClickOutside } from '../hooks/useClickOutside';
import { FocusContext } from "./context/FocusContext";

export type LoginFormData  = {
  email: string;
  password: string;
};

interface LoginProps {
  setLoginModal: (value: boolean) => void;
  loginModal: boolean;
}

export const emailPattern = {
  value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  message: 'Enter a valid email address.',
};

const Login: React.FC<LoginProps> = ({ loginModal, setLoginModal }) => {

  const portal = document.getElementById("portal")

  const [blurInputs, setBlurInputs] = React.useState(false)

  const modalRef = useRef(null)
  const closeModalButtonsRef = useRef(null)

  useClickOutside(modalRef, closeModalButtonsRef, () => {
    setLoginModal(false);
    document.body.style.overflow = 'auto'
    setBlurInputs(!blurInputs)
    reset()
})

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => { console.log(data); reset(); setBlurInputs(!blurInputs)}

  return (
    <>
      {portal && ReactDOM.createPortal(
        <div className={`${loginModal === true ? 'visible opacity-100': 'invisible opacity-0'} transition-all fixed bg-gray-950 bg-opacity-50 top-0 left-0 w-screen h-screen flex justify-center items-center z-50`}>
          <FocusContext.Provider value={blurInputs}>               
          <form ref={modalRef} className="relative bg-white flex flex-col w-96 border p-8 pb-12 -mt-36 rounded" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl font-secondary font-semibold mb-12 text-center">Login</h1>
            {LOGIN.map((item, index) => (
              <FormInput
                key={index}
                id={item.id}
                label={item.label}
                register={register}
                rules={{
                  required: 'You must enter your email address.',
                  ...(item.id === 'email' ? { pattern: emailPattern } : {})
                }}
                errors={errors} />
            ))}
            <div className="flex flex-row items-center gap-2 mt-2">
              <input className="w-5 h-5 accent-secondary"type="checkbox"></input>
              <p>Keep me logged in</p>
            </div>
            <button className="mt-4 bg-active text-white px-4 py-3 hover:bg-custom transition uppercase text-lg" type="submit">
              Log in
            </button>
            <button ref={closeModalButtonsRef} className="absolute top-8 right-8 p-2 bg-secondary rounded-2xl hover:brightness-90 transition" type="button" 
              onClick={() => { setLoginModal(false); document.body.style.overflow = 'auto'; reset(); setBlurInputs(!blurInputs)}}>
              <svg className="h-5 w-5"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
          </form>
          </FocusContext.Provider> 
        </div>,
        portal
      )}
    </>
  )
}

export default Login;
