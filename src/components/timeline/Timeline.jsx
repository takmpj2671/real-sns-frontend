import React from "react";
import Share from "../share/Share.jsx";
import "./Timeline.css";
import Post from "../post/Post.jsx";
import { Posts } from "../../assets/dummyData.js";
// import { useState } from "react";

export default function Timeline() {
  // const [val, setVal] = useState();
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />

{/*アロー関数での注意点。
  一行: () => <div>Hello</div>
  複数行: () => (JSX) または () => { return JSX; } */}
        {Posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  );
}
