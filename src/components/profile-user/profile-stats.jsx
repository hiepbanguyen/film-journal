import styles from "./profile.module.scss";
import React from "react";
import { Link } from "react-router-dom";

export const ProfileStats = (props) => {
  // console.log(props);
  return (
    <div className={styles.profileStats}>
      <h4 className={styles.profileStatistic}>
        <Link to={"reviews"}>
          <span className={styles.value}>{props?.TotalReview ?? 0}</span>
          <span className={styles.definition}>Reviews</span>
        </Link>
      </h4>
      <h4 className={styles.profileStatistic}>
        <Link to={"lists"}>
          <span className={styles.value}>{props?.TotalLists ?? 0}</span>
          <span className={styles.definition}>Lists</span>
        </Link>
      </h4>
      <h4 className={styles.profileStatistic}>
        <Link to={"following"}>
          <span className={styles.value}>{props?.Following?.Total ?? 0}</span>
          <span className={styles.definition}>Following</span>
        </Link>
      </h4>
      <h4 className={styles.profileStatistic}>
        <Link to={"followers"}>
          <span className={styles.value}>{props?.Followers?.Total ?? 0}</span>
          <span className={styles.definition}>Followers</span>
        </Link>
      </h4>
    </div>
  );
};
