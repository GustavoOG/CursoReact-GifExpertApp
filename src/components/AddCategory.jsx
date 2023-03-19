import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");
  const onInputchange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //console.log(inputValue);
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;

    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="Text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputchange(event)}
      ></input>
    </form>
  );
};
