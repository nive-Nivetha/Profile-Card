import React from 'react'

function Profilecard() {
  return (
    <div className='flex justify-center items-center h-screen bg-blue-100'>
        <div className='flex flex-col items-center bg-gray-400 p-4 rounded-lg shadow-lg transition duration-500 ease-in-out hover:shadow-xl hover:-translate-y-5 max-w-sm'>
            <img src='src/assets/nivethakumar.jpg' alt='nive pic' className='w-30 h-30 rounded-full shadow-xl mx-auto border-3 border-gray-700'/>
            <h2 className='mt-4 text-xl text-blue-600 font-semibold'>Nivetha Kumar</h2>
            <p className='text-white'>Frontend Developer</p>
            <p className='mt-3 text-sm text-gray-900 text-center'>Turning ideas into interactive web experiences. Passionate about clean code, smooth UI, and modern design.</p>
            <div className='mt-4 flex justify-center gap-4'>
                <button className='px-4 py-2 bg-blue-400 border-2 border-gray-600 rounded-xl shadow-lg font-semibold text-black hover:bg-black hover:text-white hover:border-blue-400 transition'>Follow</button>
                <button className='px-4 py-2 bg-blue-400 border-2 border-gray-600 rounded-xl shadow-lg font-semibold text-black hover:bg-black hover:text-white hover:border-blue-400 transition'>Message</button>
            </div>
        </div>
    </div>
  )
}

export default Profilecard