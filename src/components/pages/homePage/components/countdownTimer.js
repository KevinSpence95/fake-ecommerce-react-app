import React from "react";
import styles from "./countDownTimer.module.css";
export default function CountdownTimer({futureDateMS}) {
  return (
    <div className={styles.countDownTimer}>
      <span className={styles.days}>32</span>
      <span className={styles.hours}>14</span>
      <span className={styles.minutes}>08</span>
      <span className={styles.seconds}>59</span>
      <span>days</span>
      <span>hours</span>
      <span>minutes</span>
      <span>seconds</span>
    </div>
  );
}
