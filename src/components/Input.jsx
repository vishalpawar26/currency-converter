import React from 'react'

function Input({label,
  inputType,
  amount,
  onAmountChange
}) {
  return (
    <div className='w-full'>
      <p className='text-gray-500 text-sm'>
        {label}
      </p>
      <input
        type={inputType} 
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        className='w-full p-2 outline-none border-2 rounded-md'
      />
    </div>
  )
}

export default Input