import {useEffect, useState} from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/9c64e0e6aed16701b6ff4d11/latest/${currency}`)
    .then((res) => res.json())
    .then((res) => setData(res["conversion_rates"]))
  }, [currency])

  return data
}

export default useCurrencyInfo