import React, { useEffect, useState } from "react";
import Share from "../share/Share.jsx";
import "./Timeline.css";
import Post from "../post/Post.jsx";
import axios from "axios";
// import { Posts } from "../../../dummyData.js";


export default function Timeline({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // console.log("useEffect実行");
    const fetchPosts = async() => {
      const response = username 
      ? await axios.get(`/api/posts/profile/${username}`)
      : await axios.get("/api/posts/timeline/6860feec3e2aa3f2dcb4dc91");
      setPosts(response.data);
      console.log(response);
    };
    fetchPosts();
  }, []); //ページのマウント時に一回だけここに書かれるものが読み込まれる。

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />

{/*アロー関数での注意点。
  一行: () => <div>Hello</div>
  複数行: () => (JSX) または () => { return JSX; } */}
        {posts.map((post) => (
          <Post post={post} key={post._id || post.id}/>
        ))}
      </div>
    </div>
  );
}
