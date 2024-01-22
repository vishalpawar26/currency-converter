import React from 'react'

function Select({
  title,
  countryCode,
  currencyOptions = [],
  selectedCurrency,
  onCurrencyChange
}) {
  return (
    <div className='w-max'>
      <p className='text-gray-500 text-sm'>
        {title}
      </p>
      <div className='p-2 outline-none bg-white border-2 rounded-md flex gap-2'>
        <img src={`https://flagcdn.com/w40/${countryCode}.webp`} alt={countryCode} />
        <select
          className='outline-none'
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Select
