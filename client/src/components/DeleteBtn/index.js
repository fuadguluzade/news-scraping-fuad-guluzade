import React from "react";
import "./deleteBtn.css";

function DeleteBtn(props) {
  return (
    <button onClick={props.handleCommentDelete} className="card-btn" {...props}>X</button>
  );
}

export default DeleteBtn;