import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./StarWarsList.module.css";
import { selectArr, cahngeValue } from "./arrDataSlice";
import { nanoid } from "nanoid";

export default function StarWarsList() {
  const {
    arr: { arrData, value },
  } = useSelector(selectArr);
  let arrList = Array.from(arrData);
  arrList.length = value;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value < 1) e.target.value = 1;
    if (e.target.value > 5) e.target.value = 5;
    dispatch(cahngeValue(e.target.value));
    setTimeout(() => (e.target.value = ""), 500);
  };
  return (
    <>
      <h1>Факты о Starwars</h1>
      <input
        className={styles.starwarsInput}
        type="number"
        min="1"
        max="5"
        onChange={handleChange}
        placeholder="Выберите значение от 1 до 5"
      />

      <ul>
        {arrList?.map((item) => (
          <li key={nanoid()}>{item}</li>
        ))}
      </ul>
    </>
  );
}
