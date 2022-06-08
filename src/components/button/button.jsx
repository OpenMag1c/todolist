import React, { PureComponent } from "react";
import styles from "./button.module.css";

class Button extends PureComponent {
  render() {
    const { onClick, text, type } = this.props;
    return (
      <button
        type={type === "submit" ? "submit" : "button"}
        onClick={onClick}
        className={styles.button}
      >
        {text}
      </button>
    );
  }
}

export default Button;
