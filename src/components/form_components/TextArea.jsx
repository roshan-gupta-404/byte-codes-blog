import React, { useId } from 'react'

function TextArea({label,className,placeholder,...props},ref) {
    const id = useId()
  return (
    <div className=''>
    {label && <label htmlFor={id} className='text-white inline-block mb-2 pl-1 text-xl'>{label}</label>}
        <textarea
            rows="10"
            placeholder={placeholder}
            className='rounded-md px-4 pt-2 w-full  bg-transparent border border-gray-700 text-white ${className}'
            ref={ref}
            {...props}
       ></textarea>
    </div>
  )
}

export default React.forwardRef(TextArea)