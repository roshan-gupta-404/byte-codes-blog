import React, { useId } from 'react'

function Input({ label,placeholder, type = 'text', className, disableStatus = false, ...props },ref) {
  const id = useId();
  return (
    <>
      {label && <label className='text-white inline-block mb-2 pl-1 text-xl'
      htmlFor={id}
      >
        {label}
        {/* label text */}
      </label>}
      <input className={`rounded-md px-4 w-full h-10 bg-transparent border border-gray-700 text-white ${className}`}
        id={id}
        placeholder={placeholder}
        type={type}
        disabled={disableStatus}
        ref={ref}
        {...props}
      />
    </>
  )
}

export default React.forwardRef(Input)