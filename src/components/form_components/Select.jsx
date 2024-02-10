import React, { useId } from 'react'

function Select({options=[],label,className = '', ...props},ref) {
    const id = useId()

  return (
    <>
    {label && <label htmlFor={id} className='text-white inline-block mb-2 pl-1 text-xl'>{label}</label>}
    <select 
    className={`rounded-md px-4 w-full h-10 bg-transparent border border-gray-700 text-white ${className}`} 
    ref={ref}
    id={id}
    {...props}
    >
    {options?.map((option)=>(
      <option  key={option} value={option}>
        {option}
      </option>
    ))}
    </select>
    </>
  )
}
// export default Select
export default React.forwardRef(Select) // another way of forward referencing