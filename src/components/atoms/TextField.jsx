import React from "react";
import styles from "../../styles/TextField.module.css";

export default function TextField({ value = "", onChange, placeholder = "" }) {
  return (
    <div style={{ width: "100%" }}>
      <label className={styles.label}>{value ? placeholder : ""}</label>
      <input
        className={styles.textField}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
