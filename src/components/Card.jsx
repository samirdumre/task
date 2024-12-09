import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Card({ item }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: item });
    
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
  return (
    <div
      ref={setNodeRef}
      {...attributes}
          {...listeners}
          style={style}
      className="card-container"
      >
          {item}
      <div className="card">
        <div className="section">
          <div className="rectangle"></div>
          <div className="circle"></div>
          <div className="lines">
            <div className="big-line"></div>
            <div className="small-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
