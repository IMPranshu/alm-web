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
        Segment & Options
      </NavLink>
      <NavLink
        to={"/strategies"}
        className={styles.Link}
        activeClassName={styles.LinkActive}
        exact
      >
        Strategies
      </NavLink>

    </>
  );
};

export default Links;
