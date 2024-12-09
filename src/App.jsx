import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function App() {
  const [items, setItems] = useState([1, 2, 3]);

  const getIndexOfItem = (id) => items.findIndex((item) => item === id);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over.id) return;

    setItems((items) => {
      const originalIndex = getIndexOfItem(active.id);
      const newIndex = getIndexOfItem(over.id);
      return arrayMove(items, originalIndex, newIndex);
    });
  }

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <Card item={item} key={item} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default App;
