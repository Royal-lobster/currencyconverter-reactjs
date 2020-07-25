import React, { useEffect, useState } from "react";
import CurrencyRow from "./components/CurrencyRow";

export default function App() {
  const URI ='https://api.exchangeratesapi.io/latest'
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  useEffect(()=>{
    fetch(URI)
      .then(res=> res.json())
      .then(data=>{
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  console.log(currencyOptions)
  return (
    <div className="flex h-screen bg-gray-700">
      <div className="m-auto bg-red-400 p-6 rounded">
        <center>
          <h1 className="text-3xl text-white">Currency Converter</h1>
          <hr className="m-3 border-dashed border-gray-300"></hr>
          <CurrencyRow currencyOptions={currencyOptions} selectedCurrency={fromCurrency}/>
          <h1 className="text-2xl"> = </h1>
          <CurrencyRow currencyOptions={currencyOptions} selectedCurrency={toCurrency}/>
        </center>
      </div>
    </div>
  );
}
