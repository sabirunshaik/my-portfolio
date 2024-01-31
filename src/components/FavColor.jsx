import React from "react";
import { useState } from "react";
const FavColor = () => {
  const [color, SetColor] = useState("pink");
  return (
    <>
      <div>
        <h1 className="text-3xl p-3">My Favorite color is {color}</h1>
        <div className="flex items-center justify-center gap-3">
          <button onClick={()=>{SetColor('Black')}} className="border px-5 py-1 bg-black text-white">Black</button>
          <button onClick={()=>{SetColor('Red')}} className="border px-5 py-1 bg-red-500">red</button>
          <button onClick={()=>{SetColor('Green')}} className="border px-5 py-1 bg-green-500">green</button>
          <button onClick={()=>{SetColor('blue')}} className="border px-5 py-1 bg-blue-500 text-white">blue</button>
        </div>
      </div>
    </>
  );
};

export default FavColor;
