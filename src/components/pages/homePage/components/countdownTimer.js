import { useEffect, useState } from "react";
import styles from "./countDownTimer.module.css";
export default function CountdownTimer({ futureDateMS }) {
  const [timeUntilFutureDate, setTimeUntilFutureDate] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = futureDateMS - now;

      const msPerDay = 1000 * 60 * 60 * 24;
      const msPerHour = 1000 * 60 * 60;
      const msPerMinute = 1000 * 60;
      const msPerSecond = 1000;

      let days = Math.floor(diff / msPerDay);
      let hours = Math.floor((diff % msPerDay) / msPerHour);
      let minutes = Math.floor((diff % msPerHour) / msPerMinute);
      let seconds = Math.floor((diff % msPerMinute) / msPerSecond);

      days = days < 10 ? "0" + days : days.toString();
      hours = hours < 10 ? "0" + hours : hours.toString();
      minutes = minutes < 10 ? "0" + minutes : minutes.toString();
      seconds = seconds < 10 ? "0" + seconds : seconds.toString();

      if (diff > 0) {
        setTimeUntilFutureDate({ days, hours, minutes, seconds });
      } else {
        setTimeUntilFutureDate({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [futureDateMS]);

  return (
    <div className={styles.countDownTimer}>
      <span className={styles.days}>{timeUntilFutureDate.days}</span>
      <span className={styles.hours}>{timeUntilFutureDate.hours}</span>
      <span className={styles.minutes}>{timeUntilFutureDate.minutes}</span>
      <span className={styles.seconds}>{timeUntilFutureDate.seconds}</span>
      <span>days</span>
      <span>hours</span>
      <span>minutes</span>
      <span>seconds</span>
    </div>
  );
}
