import React, { useEffect, useState } from "react";
import CurrencyRow from "./components/CurrencyRow";

export default function App() {
  //api url
  const URI = "https://api.exchangeratesapi.io/latest";
  //states
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  //use effect to fetch all the data form api and store in states before.
  useEffect(() => {
    fetch(URI)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //return
  return (
    <div className="flex h-screen bg-gray-700">
      <div className="m-auto bg-red-400 p-6 rounded">
        <center>
          <h1 className="text-3xl text-white">Currency Converter</h1>
          <hr className="m-3 border-dashed border-gray-300"></hr>
          {/* ----------from currency row----------- */}
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
          />
          {/* --------end of from currency row------- */}
          <h1 className="text-2xl"> = </h1>
          {/* -------------to currency row------------ */}
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
          />
          {/* --------end of to currency row------- */}
        </center>
      </div>
    </div>
  );
}
