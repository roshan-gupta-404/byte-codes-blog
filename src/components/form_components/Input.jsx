import React from 'react'

function Input({label,placeholder, type = 'text', className, disableStatus = false,}) {
    // const label = 'Label:- '
  return (
    <div className='my-6'>
        {label && <label className='text-white inline-block mb-2 pl-1 text-xl'
                >
                {label}
                {/* label text */}
            </label>}
                <input className={`rounded-md px-4 w-full h-10 bg-transparent border border-gray-700 text-white ${className}`}
                    placeholder={placeholder}
                    type={type}
                    disabled={disableStatus}
                />
    </div>
  )
}

export default Input