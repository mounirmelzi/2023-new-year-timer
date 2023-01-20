import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import CounterCard from "./components/CounterCard";
import FireworksAnimation from "./components/FireworksAnimation";

// this code is for testing purposes only
const TARGET_DATE = new Date();
TARGET_DATE.setSeconds(TARGET_DATE.getSeconds() + 4);
//

// this is the real code
// const TARGET_DATE = new Date(2022, 11, 31, 0, 0, 0); // 2023 new year date

const getTimeDelta = () => {
  const currentDate = new Date();
  const timeDelta = TARGET_DATE.getTime() - currentDate.getTime();

  var days = Math.floor(timeDelta / (24 * 60 * 60 * 1000));
  var hours = Math.floor(
    (timeDelta % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  var minutes = Math.floor((timeDelta % (60 * 60 * 1000)) / (60 * 1000));
  var seconds = Math.floor((timeDelta % (60 * 1000)) / 1000);

  return { days, hours, minutes, seconds };
};

function App() {
  const [count, setCount] = useState();
  const [loading, setLoading] = useState(true);
  const [isNewyear, setIsNewyear] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDelta = getTimeDelta();

      setCount(timeDelta);
      setLoading(false);

      if (timeDelta.seconds < 0) setIsNewyear(true);
    }, 1000);

    return () => clearInterval(interval);
  });

  if (loading) return <Loading />;

  if (isNewyear) return <FireworksAnimation />;

  return (
    <div className="w-[100vw] h-[100vh]">
      <h1 className="text-center w-full pt-24 uppercase tracking-[1em]">
        NEW YEAR COUNTDOWN
      </h1>

      <div className="w-[100%] h-[75%] flex items-center justify-center gap-20">
        <CounterCard title="DAYS" value={count.days} />
        <CounterCard title="HOURS" value={count.hours} />
        <CounterCard title="MINUTES" value={count.minutes} />
        <CounterCard title="SECONDS" value={count.seconds} />
      </div>
    </div>
  );
}

export default App;
