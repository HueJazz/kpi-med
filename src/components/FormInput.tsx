import React, { useState, useContext } from "react";
import { RegisterOptions, Path, UseFormRegister, FieldValues } from 'react-hook-form';
import { FocusContext } from "./context/FocusContext";

export type InputProps<TFormValues extends FieldValues> = {
    id: Path<TFormValues>;
    label: string;
    className?: string;
    isTextarea?: boolean;
    register: UseFormRegister<TFormValues>;
    rules?: RegisterOptions;    
    errors: Record<string, any>;
}

const FormInput = <TFormValues extends FieldValues>({ id, label, className, isTextarea, register, rules, errors }: InputProps<TFormValues>) => {

    const [focused, setFocused] = useState(false)

    const blurInputs = useContext(FocusContext)

    React.useEffect(() => {
        setFocused(false)
    }, [blurInputs])

    const handleFocus = () => {
        setFocused(true);
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!event.target.value) {
            setFocused(false);
        }
    }

    return (
        <div className={`group mb-4 relative ${className}`}>
            <label className={`duration-200 absolute text-slate-500 pointer-events-none ${focused ? 'text-sm -top-4' : 'text-lg top-2'}`}>
                Your {label}
            </label>
            {isTextarea ? (
                <textarea 
                    {...register(id, rules)}
                    aria-invalid={errors[id] ? "true" : "false"}
                    className={`${errors[id]?.type === "required" ? 'border-red-500': 'border-custom'} mb-1 mt-2 min-h-10 max-h-60 w-full border-b outline-0 overscroll-auto transition`}
                    id={id}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            ) : (
                <input 
                    {...register(id, rules)}
                    aria-invalid={errors[id] ? "true" : "false"}
                    className={`${errors[id]?.type === "required" || errors[id]?.type ==="pattern" ? 'border-red-500': 'border-custom'} mb-1 min-h-10 w-full border-b outline-0 transition`}                    
                    id={id}
                    type="text"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            )}
            <p className={`${errors[id]?.type === "required" ? 'max-h-6 opacity-100': 'max-h-0 opacity-0'} text-red-500 transition-all`} role="alert">{label} is required</p>
            <p className={`${errors[id]?.type === "pattern" ? 'max-h-6 opacity-100': 'max-h-0 opacity-0'} text-red-500 transition-all mb-1`} role="alert">Invalid {label.toLowerCase()} format</p>        
            {/* {errors[id] && errors[id].type === "required" && (
                <p className="max-h-6 text-red-500 transition-all mb-1" role="alert">{label} is required</p>
            )}
            {errors[id] && errors[id].type === "pattern" && (
                <p className="max-h-6 text-red-500 transition-all mb-1" role="alert">Invalid {label.toLowerCase()} format</p>
            )}           */}
        </div>
    );
}

export default FormInput;