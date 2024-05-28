import axios from 'axios';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {useDropzone} from 'react-dropzone'
import { ScaleLoader } from 'react-spinners';

const Service: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const userId = 1
    const [processedImage, setProcessedImage] = useState('');
    const {serviceName} = useParams()
    const { t, i18n } = useTranslation();

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
    const SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];
    const POLLING_INTERVAL = 2000; // 2 seconds

    const onDrop = useCallback(async (acceptedFiles: File[]) => {

        const file = acceptedFiles[0];

        if (file.size > MAX_FILE_SIZE) {
          setErrorMessage('File size exceeds the 5MB limit.');
          return;
        }

        if (!SUPPORTED_FORMATS.includes(file.type)) {
          setErrorMessage('Unsupported file format. Please upload a JPEG or PNG image.');
          return;
        }
      try {
        setIsLoading(true);
        setErrorMessage('');
        const formData = new FormData();
        formData.append('image', file);
        formData.append('userId', String(userId));

        const response = await axios.post('https://medicalairestapi.onrender.com/process/image', formData)
        const { taskId } = response.data

        const pollForResult = async () => {
          try {
            const resultResponse = await axios.get(`https://medicalairestapi.onrender.com/results/${taskId}`);
            if (resultResponse.data.status === 'completed') {
              setProcessedImage(resultResponse.data.processedImageUrl);
              setIsLoading(false);
            } else if (resultResponse.data.status === 'failed') {
              setErrorMessage('Image processing failed.');
              setIsLoading(false);
            } else {
              setTimeout(pollForResult, POLLING_INTERVAL);
            }
          } catch (pollError) {
            console.error('Polling error:', pollError);
            setErrorMessage('An error occurred while polling for the processed image.');
            setIsLoading(false);
          }
        };

        pollForResult();

      } catch (err) {
        console.log(err);
        setErrorMessage('An error occurred while processing the image. Try a bit later.');
        setIsLoading(false);
      } 
    }, []);

    useEffect(() => {
      if (errorMessage) {
        const timer = setTimeout(() => {
          setErrorMessage('');
        }, 4000);
      
        return () => clearTimeout(timer);
      }

    }, [errorMessage])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const handleRemove = () => {
      setProcessedImage('');
      setErrorMessage('');
    }

  return (
    <div className="">
      <div className=" bg-secondary px-10 pt-4 pb-12">
        <h1 className="text-center text-[40px] font-secondary pt-8 text-custom font-bold">{t(`services.title.${serviceName}`)}</h1>
        <p className="py-6 text-center text-xl">{t(`services.description.${serviceName}`)}</p>
      </div>
      <div className="max-w-8xl mx-auto px-10 pt-6">
        {errorMessage && <div className="relative bg-active text-white p-4 mb-4 rounded">{errorMessage}
          <svg onClick={() => setErrorMessage('')} className="cursor-pointer absolute top-4 right-4 w-6 h-6 fill-white bg-gray-500 hover:bg-custom transition rounded-2xl p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </div>}
        {isLoading ? 
          <>
           {processedImage ? 
            <div className="relative bg-gray-100 w-2/3 py-6 mx-auto shadow-card rounded-lg">
              <img className="w-full h-auto min-h-72" src={processedImage}></img>
                <svg onClick={handleRemove} className="cursor-pointer absolute top-2 right-2 w-6 h-6 fill-white bg-gray-500 hover:bg-active transition rounded-2xl p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </div> : 
              <div className="bg-gray-100 shadow-card w-2/3 py-6 mx-auto">
                <div className="flex flex-col h-72 bg-gray-300 bg-opacity-10 justify-center items-center gap-12 text-custom font-medium rounded text-center transition">
                  Processing the image
                  <ScaleLoader className="header-container-search-suggestions-loader" color="#1d4189" height={20} />
                </div>
              </div>
            }
            </>
          :
            <div className="bg-gray-100 shadow-card w-2/3 py-6 mx-auto">
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