import React, { useState } from "react";
import styles from "./University.module.css";
import { Search } from "../../assets";
import UniversitiesData from "../UniversitiesData/UniversitiesData";
import Select from "../Select/Select";
import { countryList } from "../../consts";
const University = () => {
  const [value, setValue] = useState<typeof countryList[0]>("");
  const onChange = (option: string) => {
    setValue(option);
  };
  return (
    <div className={styles.university}>
      <div className={styles.header}>
        <span>
          Search
          <img src={Search} alt="search" />
          Universities
        </span>
        <Select optionsList={countryList} value={value} onChange={onChange} />
      </div>
      <UniversitiesData selectedValue={value}/>
    </div>
  );
};
export default University;
