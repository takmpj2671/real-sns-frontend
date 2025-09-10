import React from "react";
import "./Post.css";
import { MoreVert } from "@mui/icons-material";
// import { Users } from "../../../dummyData.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PUBLIC_FOLDER = import.meta.env.VITE_PUBLIC_FOLDER;

  const [like, setLike] = useState(post.likes?.length || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // console.log("useEffect実行");
    const fetchUser = async () => {
      const response = await axios.get(`/api/users?userId=${post.userId}`);
      setUser(response.data);
      console.log(response);
    };
    fetchUser();
  }, [post.userId]); //ページのマウント時に一回だけここに書かれるものが読み込まれる。
  //post.userIdを配列に含めることでuserId更新時に、この関数が毎回発火する。

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  // const user = Users.filter((user) => user.id ===1);//filter関数は配列を返す。
  // console.log(user[0].username);//filter関数の特徴により、配列の指定の番号が必要。
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
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
