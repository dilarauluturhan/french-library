import React, { useState } from 'react';

const Popup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        isPopupOpen && (
            <div className='font-nunito fixed top-0 left-0 w-full h-full bg-popup z-10'>
                <div className='bg-white w-2/3 h-1/3 sm:w-96 sm:h-96 border border-transparent rounded-xl absolute top-1/4 left-7 sm:top-1/4 sm:left-39'>
                    <h1 className='text-2xl sm:text-4xl font-bold text-center mt-12'>Bonjour!</h1>
                    <p className=' text-md sm:text-xl text-center font-semibold mt-4'>It is an open source project prepared by Dilara Uluturhan and is waiting for the support of the developers. Enjoy your work!</p>
                    <button className='text-2xl sm:text-3xl font-semibold bg-transparent hover:bg-gray-200 border-2 rounded-lg border-black w-20 h-10 sm:w-24 sm:h-14 absolute left-28 sm:left-36 top-3/4 sm:top-64' onClick={closePopup}>OK🥐</button>
                </div>
            </div>
        )
    )
};

export default Popup;