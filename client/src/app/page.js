"use client";

import React, { useState } from "react";

const page = () => {
  let [number, SetNumber] = useState(0);

  const handelIncrement = () => {
    {
      SetNumber(number + 1);
    }
  };
  const handelDecrement = () => {
    {
      SetNumber(number + 1);
    }
  };
  return (
    <div>
      <button onClick={handelIncrement}>+</button>
      {number}
      <button onClick={handelDecrement}>-</button>
    </div>
  );
};

export default page;
