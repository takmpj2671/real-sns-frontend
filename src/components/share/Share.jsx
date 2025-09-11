import React, { useContext, useRef } from "react";
import "./Share.css";
import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

export default function Share() {
  const {user} = useContext(AuthContext);
  const PUBLIC_FOLDER = import.meta.env.VITE_PUBLIC_FOLDER;
  const desc = useRef();
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    
    try{
      await axios.post("/api/posts", newPost);
      window.location.reload();
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PUBLIC_FOLDER + user.profilePicture
                : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="what's doing now?"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />

        <form className="shareButtons" onSubmit={(e) => {handleSubmit(e)}}>
          <div className="shareOptions">
            {" "}
            {/*写真、GIF、Feeling、投票*/}
            <div className="shareOption">
              <Image className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">写真</span>
            </div>
            <div className="shareOption">
              <Gif className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <Face className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOption">
              <Analytics className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">投票</span>
            </div>
          </div>
          <button className="shareButton" type="submit">投稿</button>
        </form>
      </div>
    </div>
  );
}
