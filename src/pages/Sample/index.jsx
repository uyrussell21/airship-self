import React from "react";
import styles from "./styles.module.scss";

const Sample = () => {
  return (
    <>
      <div className="hello">
        Hello World{" "}
        <span className={styles["red"]}>
          {" "}
          This is next.js Styles Components
        </span>
      </div>

      <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
    </>
  );
};

export default Sample;
