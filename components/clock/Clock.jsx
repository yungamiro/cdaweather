import { nowTOHHMM } from "../service/date-service";
import { styles } from "./Clock.style";
import { Txt } from "../text/Txt";
import { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(nowTOHHMM());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowTOHHMM);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <Txt>{time}</Txt>
    </>
  );
}
