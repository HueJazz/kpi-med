import axios from 'axios';
import React, { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {useDropzone} from 'react-dropzone'

const Service: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false)
    const userId = 1
    const [image, setImage] = useState('')
    const inputFileRef = useRef<HTMLInputElement>(null)
    const {serviceName} = useParams()
    const { t, i18n } = useTranslation();

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
      try {
        setIsLoading(true);
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('image', file);
        formData.append('userId', String(userId));
        setImage(URL.createObjectURL(file));
        await axios.post('https://medicalairestapi.onrender.com/process/image', formData)
        console.log('Sent!')
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      } 
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const handleRemove = () => {
      setImage('')
      if (inputFileRef.current) {
        inputFileRef.current.value = '';
      }
    }

  return (
    <div className="">
      <div className=" bg-secondary px-10 pt-4 pb-12">
        <h1 className="text-center text-[40px] font-secondary pt-8 text-custom font-bold">{t(`services.title.${serviceName}`)}</h1>
        <p className="py-6 text-center text-xl">{t(`services.description.${serviceName}`)}</p>
      </div>
      <div className="max-w-8xl mx-auto px-10 pt-6">
        {image ? (
            <div className="relative w-1/2 bg-gray-100 py-6 shadow-card rounded-lg">
            <img className="w-full max-h-72 min-h-72" src={`${image}`}></img>
             <svg onClick={handleRemove} className="cursor-pointer absolute top-2 right-2 w-6 h-6 fill-white bg-gray-500 hover:bg-active transition rounded-2xl p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>

            </div>
          ):
            <div className="bg-gray-100 shadow-card w-1/2 py-6">
              <div className="flex flex-col h-72 shadow-card bg-gray-50 justify-center items-center gap-12 text-custom font-medium rounded text-center border-[3px] hover:border-custom border-gray-300 transition border-dashed" {...getRootProps()}>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the file here ...</p> :
                  <p>Drag 'n' drop some file here, or click to select file</p>
                  
              }
                <button className="bg-secondary text-custom font-medium rounded py-2 px-6 hover:bg-active hover:text-white text-lg transition">Upload</button>
              </div>
            </div>
          } 
      </div>
    </div>
  );
}

export default Service;