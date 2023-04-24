import React from "react";

function Task(props) {
  const { category, text } = props.task;
  
  const handleDeleteClick = () => {
    props.onDelete(props.task.id);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;