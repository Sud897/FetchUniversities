import styles from "./Option.module.css";
import { OptionProps } from "../../types";
import { useState } from "react";
const Option = ({
  option,
  onOptionClick,
  isOptionSelected = false,
  onCallBack,
}: OptionProps) => {
  const [hovered, setHovered] = useState(false);
  const getListClassName = () => {
    let className = [styles.list];
    if (isOptionSelected) {
      className.push(styles.activeList);
    }
    if (hovered && !isOptionSelected) {
      className.push(styles.hoveredList);
    }
    return className.join(" ");
  };
  const clickedHandler = () => {
    onOptionClick(option);
    onCallBack();
  };
  return (
    <li
      className={getListClassName()}
      onClick={clickedHandler}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.optionName}>{option}</div>
      <div className={styles.checkbox}></div>
    </li>
  );
};
export default Option;
