import React from "react";

function CounterCard(props) {
  return (
    <div className="w-44 h-44 p-12 flex items-center justify-center border-white border-solid border-4 rounded-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-5xl font-bold">{props.value}</span>
        <span className="text-2xl font-semibold">{props.title}</span>
      </div>
    </div>
  );
}

export default CounterCard;
