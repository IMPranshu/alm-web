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
    </>
  );
};

export default Links;
