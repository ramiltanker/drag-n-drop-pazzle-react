import React from "react";

// Стили
import mainStyles from "./Main.module.css";
// Стили

// Компоненты
import DragContainer from "../DragContainer/DragContainer";
// Компоненты

function Main() {
  return (
    <main className={mainStyles.main}>
      <DragContainer />
    </main>
  );
}

export default Main;
