import React, { createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./avatarList.module.css";
import { addImg, selectImgArr } from "./avatarSlice";
import { nanoid } from "nanoid";

export default function AvatarList() {
  const dispatch = useDispatch();
  let arrList = useSelector(selectImgArr);
  let arrListReverse = Array.from(arrList);
  let textInput = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addImg(URL.createObjectURL(textInput.current.files[0])));
    e.target[0].value = "";
  };

  return (
    <>
      <h1>Загрузка аватар</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={textInput} />
        <button type="submit">загрузить</button>
      </form>

      <ul className={styles.list}>
        {arrListReverse.reverse()?.map((item) => (
          <img src={item} alt="avatar" key={nanoid()} className={styles.img} />
        ))}
      </ul>
    </>
  );
}
