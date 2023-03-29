import styles from "./profile.module.scss";
import React from "react";

export const ProfileStats = () => {
  return (
    <div className={styles.profileStats}>
      <h4 className={styles.profileStatistic}>
        <a href="">
          <span className={styles.value}>1</span>
          <span className={styles.definition}>Film</span>
        </a>
      </h4>
      <h4 className={styles.profileStatistic}>
        <a href="">
          <span className={styles.value}>0</span>
          <span className={styles.definition}>This year</span>
        </a>
      </h4>
      <h4 className={styles.profileStatistic}>
        <a href="">
          <span className={styles.value}>0</span>
          <span className={styles.definition}>Lists</span>
        </a>
      </h4>
      <h4 className={styles.profileStatistic}>
        <a href="">
          <span className={styles.value}>0</span>
          <span className={styles.definition}>Following</span>
        </a>
      </h4>
      <h4 className={styles.profileStatistic}>
        <a href="">
          <span className={styles.value}>0</span>
          <span className={styles.definition}>Followers</span>
        </a>
      </h4>
    </div>
  );
};
