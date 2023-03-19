import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //categories.push("Hola");
    //setCategories(['Hola Mundo'])
    setCategories([newCategory, ...categories]);
    //setCategories((cat) => [...cat, "Valorant"]);
  };

  return (
    <>
      <h1>GitExpertAdd</h1>
      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
    </>
  );
};
