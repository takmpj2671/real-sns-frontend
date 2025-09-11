import React, { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.css";
import axios from "axios";
import { useParams } from "react-router-dom"; //URLのパラメーターを取得する。

export default function Profile() {
  const PUBLIC_FOLDER = import.meta.env.VITE_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username; //URLからusernameを取得する。

  useEffect(() => {
    // console.log("useEffect実行");
    const fetchUser = async () => {
      const response = await axios.get(`/api/users?username=${username}`);
      setUser(response.data);
      console.log(response);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  PUBLIC_FOLDER + user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline username={username} />
            {/*usernameで渡したpropがあるか無いかでtimelineの表示を変える。*/}
            <Rightbar user={user} />
            {/*profile(Prop)をつけることでprofileに関するRightbarと認識させる。 Home.jsxの方にはついていない。*/}
          </div>
        </div>
      </div>
    </>
  );
}
