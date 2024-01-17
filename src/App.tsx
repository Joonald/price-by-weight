import { useState } from "react";
import "./App.css";

function App() {
  const [price, setPrice] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [unit, setUnit] = useState<string>("kg");

  function handleChange(
    setState: React.Dispatch<React.SetStateAction<number>>,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = parseFloat(event.target.value) || 0;
    setState(value);
  }

  function calculateCost(price: number, weight: number, unit: string) {
    let res = 0;
    if (unit === "kg") {
      res = price / weight;
    } else if (unit === "g") {
      res = (price / weight) * 100;
    }
    const cost = Math.round(res * 100) / 100;
    setCost(cost);
  }

  return (
    <>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        Food Weight Price Calculator
      </h1>
      <div className='w-full max-w-s p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-violet-500/25 dark:border-violet-400/25'>
        <h2 className='mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white'>
          Calculate price per {unit === "kg" ? unit : "100g"}
        </h2>
        <div className='flex justify-between items-center w-full mb-4'>
          <div className='flex items-center w-[48%]'>
            <h3 className='text-3xl pr-1 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
              $
            </h3>
            <input
              placeholder='0'
              type='number'
              onChange={(event) => handleChange(setPrice, event)}
              className='w-full text-xl md:text-2xl lg:text-3xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          <span className='text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white'>
            /
          </span>
          <div className='flex w-[48%]'>
            <input
              placeholder='0'
              type='number'
              onChange={(event) => handleChange(setWeight, event)}
              className='w-7/12 text-xl md:text-2xl lg:text-3xl bg-gray-50 border border-gray-300 text-gray-900 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <select
              onChange={(event) => setUnit(event.target.value)}
              name='unit'
              id='unit'
              className='w-5/12 text-sm md:base font-bold  border rounded-r-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 block p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'>
              <option value='kg'>kg</option>
              <option value='g'>g</option>
            </select>
          </div>
        </div>
        <button
          type='button'
          className='w-full text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-md px-5 py-2.5 mb-4 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800'
          onClick={() => calculateCost(price, weight, unit)}>
          Calculate
        </button>
        <p className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-white'>
          {cost === 0
            ? "Please enter a number."
            : `$${cost}/${unit === "kg" ? unit : "100g"}`}
        </p>
      </div>
    </>
  );
}

export default App;
