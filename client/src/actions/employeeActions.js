import axios from "axios";
import { GET_ALL_EMPLOYEE_RECORD, GET_ERRORS } from "./types";

export const addEmpRecords = (postRecordData, history) => dispatch => {
    axios
        .post("/api/employee/addemployee", postRecordData)
        .then(res => history.push("/employeelist"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


// Get all profiles
export const getAllEmployee = () => dispatch => {
    //dispatch(setProfileLoading());
    axios
        .get('/api/employee/employeelist')
        .then(res =>
            dispatch({
                type: GET_ALL_EMPLOYEE_RECORD,
                payload: res.data
            })
        )
      .catch(err =>
            dispatch({
                type: GET_ALL_EMPLOYEE_RECORD,
                payload: null
            })
      );
  };