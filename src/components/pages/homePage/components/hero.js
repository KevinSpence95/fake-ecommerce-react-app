import React from "react";
import { Link } from "react-router-dom";
import styles from "./hero.module.css";
export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.clip}>The best shop in the world.</h1>
      <Link to="/products" className={styles.shop}>
        SHOP
      </Link>
    </div>
  );
}
