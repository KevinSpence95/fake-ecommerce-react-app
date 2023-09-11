import Hero from "./components/hero";
import CountdownTimer from "./components/countdownTimer";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <h3>These deals wont last forever!</h3>
      <CountdownTimer />
    </div>
  );
}
