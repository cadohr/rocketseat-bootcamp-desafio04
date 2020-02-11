import React, { Component } from "react";

import "./styles.css";

function Comment({ author, content }) {
  return (
    <div className="comment">
      <div className="avatar">
        <img src={author.avatar} alt={author.name} />
      </div>
      <div className="content">
        <strong>{author.name} </strong>
        {content}
      </div>
    </div>
  );
}

export default Comment;
