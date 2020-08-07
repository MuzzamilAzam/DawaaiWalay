import Axios from "axios";
import Cookie from 'js-cookie';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_REGISTER_REQUEST, USER_LOGOUT, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../constants/userConstants";

const signin = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try{
        const {data} = await Axios.post("/api/users/signin", {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }
    catch(error){
        dispatch({type: USER_SIGNIN_FAIL, payload: error.message});
    }
}

const register = (name, email, password) => async (dispatch) => {
  // console.log("here");
    dispatch({type: USER_REGISTER_REQUEST, payload: {name, email, password}});
    // console.log("email");
    try{
        const {data} = await Axios.post("/api/users/register", {name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
        
    }
    catch(error){
        dispatch({type: USER_REGISTER_FAIL, payload: error.message});
    }
}

const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT });
}

const update = ({ userId, name, email, password }) => async (dispatch, getState) => {
  
  const { userSignin: { userInfo } } = getState();
  // alert('Bearer ' + userInfo.token); 
    dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, name, email, password } });
    try {
      const { data } = await Axios.put("/api/users/" + userId,
        { name, email, password }, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
      
    window.location.reload();
    } catch (error) {
      dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
      window.location.reload();
    }
  }

export {signin, register,logout,update}//, logout, update}