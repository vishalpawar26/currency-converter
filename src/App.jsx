import { useState } from 'react'
import './App.css'
import swap_icon from './assets/swap_icon.svg'
import Input from './components/Input'
import Select from './components/Select'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import countryList from './country_codes/codes'

function App() {
  const [to, setTo] = useState('INR')
  const [from, setFrom] = useState('USD')
  const [amount, setAmount] = useState(0)
  const [exchangedAmount, setExchangedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  let swap = () => {
    setTo(from)
    setFrom(to)
    setAmount(exchangedAmount)
    setExchangedAmount(amount)
  }

  const getExchangeRates = () => {
    setExchangedAmount(Math.round(currencyInfo[to] * amount * 10000000) / 10000000)
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen min-w-96 p-4'>
      <h2 className='text-2xl font-semibold mb-6'>
        Simple Currency Converter
      </h2>
      <div className='flex flex-col gap-4 items-center w-88 p-6 bg-white rounded-md shadow-md border-blue-500 border-t-8'>
        <div className='flex flex-col items-center mb-6'>
          <p className='text-gray-400 mb-2'>
            Exchange Rate
          </p>
          <h2 className='text-3xl font-semibold text-center'>
            {amount} {from} = {exchangedAmount} {to} 
          </h2>
        </div>
        <Input
          label="Amount"
          inputType="number" 
          amount={amount}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <div className='flex w-full justify-between'>
          <Select
            title="From"
            countryCode={countryList[from].toLowerCase()}
            currencyOptions={options}
            selectedCurrency={from}
            onCurrencyChange={currency => setFrom(currency)}
          />
          <button className='mt-5 mx-4' onClick={swap}>
            <img
              src={swap_icon}
              alt="Swap"
            />
          </button>
          <Select
            title="To"
            countryCode={countryList[to].toLowerCase()}
            currencyOptions={options}
            selectedCurrency={to}
            onCurrencyChange={currency => setTo(currency)}
          />
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 w-full rounded-md' onClick={getExchangeRates}>
          Get Exchange Rate
        </button>
      </div>
    </div>
  )
}

export default App
