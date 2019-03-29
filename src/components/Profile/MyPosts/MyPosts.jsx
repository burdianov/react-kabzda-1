import React from "react";
import cls from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  const posts = [
    { id: 1, message: "Hi, how are you?", likesCount: "3" },
    { id: 2, message: "It's my first post", likesCount: "5" }
  ];

  return (
    <div className={cls.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={cls.posts}>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              message={post.message}
              likesCount={post.likesCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
