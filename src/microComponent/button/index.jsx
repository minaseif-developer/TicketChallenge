import React from 'react'

const Button = (props) => {
  const { type, children, className, onClick, restProps } = props
  return (
    <button
      className={[
        'text-sm rounded-md bg-teal-500 shadow-md text-white w-40 h-10',
        className,
        type === 'secondary'
          ? 'text-sm rounded-md bg-teal-500 shadow-md text-white w-40 h-10   font-bold hover:bg-blue-800 active:bg-blue-800 focus:outline-none'
          : type === 'tertiary'
          ? 'text-sm rounded-md bg-slate-100 shadow-md text-gray-900 w-40 h-10   font-bold hover:bg-gray-300 active:bg-gray-300 focus:outline-none'
          : type === 'fourthary'
          ? 'text-sm rounded-md bg-blue-800 shadow-md text-slate-300 w-40 h-10   font-bold hover:bg-gray-100 active:bg-gray-100 focus:outline-none'
          : 'default',
      ].join(' ')}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
