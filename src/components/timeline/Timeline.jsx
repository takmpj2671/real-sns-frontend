import React, { useContext, useEffect, useState } from "react";
import Share from "../share/Share.jsx";
import "./Timeline.css";
import Post from "../post/Post.jsx";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext.jsx";
// import { Posts } from "../../../dummyData.js";

export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // console.log("useEffect実行");
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/api/posts/profile/${username}`) //プロフィールの場合
        : await axios.get(`/api/posts/timeline/${user._id}`); //ホームの場合
      setPosts(
        response.data.sort((post1, post2) => { //useStateで配列で初期化しているため、postsは配列である。
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
      console.log(response);
    };
    fetchPosts();
  }, [username, user._id]); //ページのマウント時に一回だけここに書かれるものが読み込まれる。

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />

        {/*アロー関数での注意点。
  一行: () => <div>Hello</div>
  複数行: () => (JSX) または () => { return JSX; } */}
        {posts.map((post) => (
          <Post post={post} key={post._id || post.id} />
        ))}
      </div>
    </div>
  );
}
