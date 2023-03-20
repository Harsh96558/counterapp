import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count , setcount]=useState(0)

  function decreaseHandler(){
    setcount(count-1)
  }

  function increaseHandler(){
    setcount(count+1)

  }
  function resetHandler(){
    setcount(0)
  }
  return (
    <div className="w-[100vw] h-[100vh] justify-center items-center flex bg-[#344151] flex-col gap-10">
     <div className='text-[#0398d4] font-medium text-2xl '>Increament && Decreament</div>
     <div className="bg-white flex justify-center items-center gap-12 py-3 rounded-sm font-medium text-[25px] text-[#344151]">
      <button onClick={decreaseHandler} className="border-r-2  text-center w-20 border-[#bfbfbf] text-5xl">-</button>
      <div>{count}</div>
      <button onClick={increaseHandler} className="border-l-2  text-center w-20 border-[#bfbfbf] text-5xl">+</button>
     </div>
     <button  onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-3 rounded-md text-lg">Reset</button>
    </div>
  );
}

export default App;
