import React from "react";
import styles from "../../styles/CustomButton.module.css";
import { Button } from "@mui/material";

export default function CustomButton({ children, onClick }) {
  return (
    <Button variant="contained" onClick={onClick} className={styles.button}>
      {children}
    </Button>
  );
}
