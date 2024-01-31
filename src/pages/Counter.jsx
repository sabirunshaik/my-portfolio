import React, { useState } from "react";
const Counter = () => {
  const [inc, setInc] = useState(0);
  const increment = () => {
    setInc(inc + 1);
  };

  const decrement = () => {
    if (inc > 0) {
      setInc(inc - 1);
    } else {
      setInc(inc);
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-gray-700 flex flex-col gap-2 items-center justify-center">
        <h1 className="text-3xl font-bold mb-5 text-white">{inc}</h1>
        <div>
          <button
            className="p-2 font-bold rounded bg-green-400 mr-2"
            onClick={increment}
          >
            Increase
          </button>
          <button
            className="p-2 font-bold rounded bg-red-400"
            onClick={decrement}
          >
            Decrease
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
