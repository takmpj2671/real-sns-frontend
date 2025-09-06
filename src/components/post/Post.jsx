import React from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../assets/dummyData.js";
import { useState } from "react";

export default function Post({ post }) {
  const PUBLIC_FOLDER = import.meta.env.VITE_PUBLIC_FOLDER;

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  // const user = Users.filter((user) => user.id ===1);//filter関数は配列を返す。
  // console.log(user[0].username);//filter関数の特徴により、配列の指定の番号が必要。
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                PUBLIC_FOLDER +
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">{like}:いいね</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
