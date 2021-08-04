import React from "react";

// Стили
import listStyles from "./DragList.module.css";
// Стили

function DragList(props) {
  const { puzzleElement, handleDrag } = props;

  return (
    <li key={puzzleElement.id} className={listStyles.listItem}>
      {puzzleElement && (
        <img
          className={listStyles.img}
          src={`${puzzleElement.elementSrc}`}
          draggable
          onDrag={(e) => handleDrag(e, puzzleElement)}
          onDragEnd={(e) => {
            e.target.style.opacity = 1;
          }}
          alt="*"
        />
      )}
    </li>
  );
}

export default DragList;
