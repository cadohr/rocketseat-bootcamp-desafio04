import React, { Component } from "react";

import "./styles.css";

import asyncPosts from "../../services/api";

import Post from "../Post";

class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: asyncPosts });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="post-list">
        {posts.map(post => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    );
  }
}

export default PostList;
