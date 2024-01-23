import React, { useId } from 'react'

function TextArea({label,className,placeholder,...props},ref) {
    const id = useId()
  return (
    <div className='my-6'>
    {label && <label htmlFor={id} className='text-white inline-block mb-2 pl-1 text-xl'>{label}</label>}
        <textarea
            placeholder={placeholder}
            className='rounded-md px-4 pt-2 w-full h-10 bg-transparent border border-gray-700 text-white ${className}'
            ref={ref}
            {...props}
        />
    </div>
  )
}

export default React.forwardRef(TextArea)