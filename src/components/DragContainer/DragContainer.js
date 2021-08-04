import React from "react";

import DragList from "../DragList/DragList";
import DropTarget from "../DropTarget/DropTarget";
import puzzleImage from "../../images/машина.png";

// Стили
import containerStyles from "./DragContainer.module.css";
// Стили

import part0 from "../../images/puzzle-piece-0.png";
import part1 from "../../images/puzzle-piece-1.png";
import part2 from "../../images/puzzle-piece-2.png";
import part3 from "../../images/puzzle-piece-3.png";

function DragContainer() {
  const [sourceElements, setSourceElements] = React.useState([]);
  const [draggedElements, setDraggedElements] = React.useState([]);
  const [draggedElement, setDraggedElement] = React.useState({});

  const partsArr = [part0, part1, part2, part3];

  React.useEffect(() => {
    const parts = partsArr
      .map((element, index) => ({
        elementSrc: element,
        id: index,
      }))
      .sort(() => Math.random() - 0.5);
    const emptyPuzzleData = [...Array(4)].map(() => ({}));

    setSourceElements([...parts]);
    setDraggedElements([...emptyPuzzleData]);
  }, []);

  const handleDrop = (e, index) => {
    e.preventDefault();
    setSourceElements([
      ...sourceElements.filter((element) => element.id !== draggedElement.id),
    ]);

    setDraggedElements(
      draggedElements.map((element, elementIndex) => {
        if (element.id === draggedElement.id) return {};
        return elementIndex === index ? draggedElement : element;
      })
    );
    setDraggedElement({});
    e.target.style.opacity = 1;
  };

  const handleDrag = (e, currentElement) => {
    e.preventDefault();
    setDraggedElement(currentElement);
    e.target.style.opacity = 0.5;
  };

  return (
    <section className={containerStyles.container}>
      <ul className={containerStyles.list}>
        {sourceElements.map((item) => (
          <DragList
            key={item.id}
            puzzleElement={item}
            handleDrag={handleDrag}
          />
        ))}
      </ul>

      <ul
        className={containerStyles.list}
        style={{ backgroundImage: `url(${puzzleImage})` }}
      >
        {draggedElements.map((item, index) => (
          <DropTarget
            key={index}
            dropTargetIndex={index}
            puzzleElement={item}
            handleDrop={handleDrop}
            handleDrag={handleDrag}
          />
        ))}
      </ul>
    </section>
  );
}

export default DragContainer;
