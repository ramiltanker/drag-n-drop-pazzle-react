import React from "react";

// Стили
import targetStyles from "./DropTarget.module.css";
// Стили

function DropTarget(props) {
  const { puzzleElement, handleDrop, dropTargetIndex, handleDrag } = props;
  return (
    <li
      onDragOver={(e) => e.preventDefault()}
      {...(!puzzleElement.id && {
        onDrop: (e) => handleDrop(e, dropTargetIndex),
      })}
      className={targetStyles.listItem}
    >
      {puzzleElement.elementSrc && (
        <img
          className={targetStyles.img}
          onDrag={(e) => handleDrag(e, puzzleElement)}
          draggable
          src={`${puzzleElement.elementSrc}`}
          alt="*"
        />
      )}
    </li>
  );
}

export default DropTarget;
