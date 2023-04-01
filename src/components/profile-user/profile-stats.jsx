import styles from "./profile.module.scss";
import React from "react";
import { Link, useNavigate, useSearchParams, Outlet, useParams } from "react-router-dom";

export const ProfileStats = () => {
  const { username } = useParams();
  return (
    <div className={styles.profileStats}>
      <h4 className={styles.profileStatistic}>
        <Link to={"/u/"+ username +"/films"}>
          <span className={styles.value}>1</span>
          <span className={styles.definition}>Films</span>
        </Link>
      </h4>
      {/* <h4 className={styles.profileStatistic}>
        <Link to="">
          <span className={styles.value}>0</span>
          <span className={styles.definition}>This year</span>
        </Link>
      </h4> */}
      <h4 className={styles.profileStatistic}>
        <Link to={"/u/"+ username +"/lists"}>
          <span className={styles.value}>0</span>
          <span className={styles.definition}>Lists</span>
        </Link>
      </h4>
      <h4 className={styles.profileStatistic}>
        <Link to={"/u/"+ username +"/following"}>
          <span className={styles.value}>0</span>
          <span className={styles.definition}>Following</span>
        </Link>
      </h4>
      <h4 className={styles.profileStatistic}>
        <Link to={"/u/"+ username +"/followers"}>
          <span className={styles.value}>0</span>
          <span className={styles.definition}>Followers</span>
        </Link>
      </h4>
    </div>
  );
};
