import { useRef, useState } from "react";
import { Arrow } from "../../assets";
import { SelectProps } from "../../types";
import Option from "../Option/Option";
import styles from "./Select.module.css";
const Select = ({ optionsList = [], value, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectContainerRef = useRef(null);

  const onOptionClick = (option: string) => {
    if (option !== value) {
      onChange(option);
    }
  };

  const arrowImageClassName = `${styles.arrow} ${
    isOpen ? styles.arrowInverted : ""
  }`;
  const optionsContainerClassName = `${styles.optionsOuterContainer} ${
    isOpen ? styles.showOptionContainer : ""
  }`;

  return (
    <div className={styles.selectContainer} ref={selectContainerRef}>
      <div
        role="listbox"
        className={styles.selectBoxContainer}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value.length === 0 ? (
          <div className={styles.selectedText}>Select a Country...</div>
        ) : (
          <div className={styles.selectedText}>{value}</div>
        )}
        <img className={arrowImageClassName} src={Arrow} alt="arrow" />
      </div>
      <div className={optionsContainerClassName}>
        <ul>
          {optionsList.map((option, index) => {
            return (
              <Option
                key={index}
                option={option}
                onOptionClick={onOptionClick}
                isOptionSelected={value === option}
                onCallBack={() => setIsOpen(false)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Select;
