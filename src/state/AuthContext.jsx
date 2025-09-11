import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義。
const initialState = {
  //
  user: {
    _id: "6860feec3e2aa3f2dcb4dc91",
    username: "Yusuke",
    email: "taklahashi1@gmail.com",
    password: "abcdef",
    profilePicture: "/person/1.jpeg",
    cover: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

//状態をグローバルに管理する。
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
