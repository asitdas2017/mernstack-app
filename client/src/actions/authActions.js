import setAuthToken from './../utils/setAuthToken';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register new User
// Call API to post data and dispatch the errors if any
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// LOGIN with credential of registered User
// Call API to post Login data and dispatch the errors if any
// Get the user TOKEN
export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save and set to local Storage
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      
      // Set token to Authentication header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Set Logged-in user's details after decoding
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};


// USER LOGOUT
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // set isAuthenticated to false
  dispatch(setCurrentUser({}));
};