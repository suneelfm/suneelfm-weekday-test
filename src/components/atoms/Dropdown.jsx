import { Autocomplete } from "@mui/material";
import React from "react";
import styles from "../../styles/Dropdown.module.css";
import Icon from "./Icon";

export default function Dropdown({
  value,
  options = [],
  onDropdownChange,
  isMultiple,
  placeholder,
}) {
  const label = isMultiple
    ? value.length
      ? ""
      : placeholder
    : value
    ? ""
    : placeholder;
  return (
    <div style={{ width: "100%" }}>
      <label className={styles.label}>{label ? "" : placeholder}</label>
      <Autocomplete
        options={options}
        value={value}
        onChange={(e, value) => onDropdownChange(value)}
        sx={{ width: "100%" }}
        multiple={isMultiple}
        renderInput={(params) => (
          <div ref={params.InputProps.ref} className={styles.dropdownWrapper}>
            <div className={styles.inputWrapper}>
              {isMultiple &&
                value?.map((option, index) => (
                  <div
                    key={`tag-${index + 1}`}
                    className={`${styles.tagChip} ${styles.alignCenter}`}
                  >
                    <div>{option}</div>
                    <Icon
                      name="cancel"
                      className={styles.removeTagIcon}
                      onClick={() => {
                        const valueCopy = [...value];
                        valueCopy.splice(index, 1);
                        onDropdownChange(valueCopy);
                      }}
                    />
                  </div>
                ))}
              <input
                type="text"
                {...params.inputProps}
                placeholder={label}
                className={styles.dropdownInput}
              />
            </div>
            <div className={`${styles.endIconWrapper} ${styles.alignCenter}`}>
              {!label && (
                <Icon
                  name={"cancel"}
                  onClick={() => onDropdownChange(isMultiple ? [] : "")}
                  className={styles.dropdownIcon}
                />
              )}
              <hr style={{ height: "100%" }} />
              <Icon
                name={"down"}
                {...params.InputProps}
                className={styles.dropdownIcon}
              />
            </div>
          </div>
        )}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <div key={`tag-${index + 1}`} className={styles.tagChip}>
              <div>{option}</div>
              <Icon
                name="cancel"
                className={styles.removeTagIcon}
                onClick={getTagProps({ index }).onDelete}
              />
            </div>
          ))
        }
      />
    </div>
  );
}
