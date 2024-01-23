import React from 'react'

function Button({children,className, ...props}) {
  return (
    <div>
        <button className={className}
        {...props}
        >
            {children}
        </button>
    </div>
  )
}

export default Button