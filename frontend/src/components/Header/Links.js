import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Links = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className={styles.Link}
        activeClassName={styles.LinkActive}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to={"/segments"}
        className={styles.Link}
        activeClassName={styles.LinkActive}
        exact
      >
        Segments
      </NavLink>
      <NavLink
        to={"/options"}
        className={styles.Link}
        activeClassName={styles.LinkActive}
        exact
      >
        Options
      </NavLink>
      <NavLink
        to={"/backtest"}
        className={styles.Link}
        activeClassName={styles.LinkActive}
        exact
      >
        Backtest
      </NavLink>
      <NavLink
        to={"/strategies"}
        className={styles.Link}
        activeClassName={styles.LinkActive}
        exact
      >
        Strategies
      </NavLink>

      <NavLink
        to={"/offers"}
        className={styles.Link}
        activeClassName={styles.LinkActive}
        exact
      >
        Offers
      </NavLink>

    </>
  );
};

export default Links;
