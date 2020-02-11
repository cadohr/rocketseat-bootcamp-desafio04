import React, { Component } from "react";

import "./styles.css";

import Comment from "../Comment";

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <div className="author">
        <div className="avatar">
          <img src={author.avatar} alt={author.name} />
        </div>
        <div className="info">
          <strong>{author.name}</strong>
          <span className="date">{date}</span>
        </div>
      </div>
      <div className="content">{content}</div>

      {comments && <hr />}

      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

export default Post;
