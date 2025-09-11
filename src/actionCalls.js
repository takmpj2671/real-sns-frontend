import axios from "axios";

export const loginCall = async(user, dispatch) => { //この引数のdispatchは、AuthContextから渡されたもの
    dispatch({type: "LOGIN_START"});
    try{
        const response = await axios.post("api/auth/login", user);
        dispatch({type: "LOGIN_SUCCESS", payload: response.data}); //response.dataにuser情報が入る。
    } catch(err){
        dispatch({type: "LOGIN_ERROR", payload: err});
    }
}