import axios from "axios";
import {
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  signupFail,
  signupRequest,
  signupSuccess,
  updateUserFail,
  updateUserRequest,
  updateUserSuccess,
} from "../reducers/userReducer";
import { server } from "../store";

export const register = (formdata) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    const { data } = await axios.post(`${server}/user/signup`, formdata, {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(signupSuccess(data));
  } catch (error) {
    console.log("🚀 ~ register ~ error:", error);
    dispatch(signupFail(error.response.data.message));
  }
};

export const updateUser = (formdata, userId) => async (dispatch) => {
  try {
    dispatch(updateUserRequest());
    const { data } = await axios.put(
      `${server}/user/updateUser/${userId}`,
      formdata,
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(updateUserSuccess(data));
  } catch (error) {
    console.log("🚀 ~ updateUser ~ error:", error);
    dispatch(updateUserFail(error.response.data.message));
  }
};

export const loginUserRedux = (userData) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    dispatch(loginSuccess(userData));
  } catch (error) {
    console.error(error);
    dispatch(loginFail(error.response?.data?.message || "Login failed"));
  }
};

export const loadUserRedux = () => async (dispatch) => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    dispatch(loadUserFail("Token not found. Please login again."));
    return;
  }

  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(`${server}/auth/getMyProfile`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });

    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    console.log(error);
    dispatch(loadUserFail(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    const { data } = await axios.get(`${server}/user/logout`, {
      withCredentials: true,
    });

    dispatch(logoutSuccess(data.message));
  } catch (error) {
    console.log("🚀 ~ logout ~ error:", error);
    dispatch(logoutFail(error.response.data.message));
  }
};
