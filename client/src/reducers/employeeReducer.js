import { SET_EMPLOYEE_RECORD, GET_ALL_EMPLOYEE_RECORD } from './../actions/types';

const initialState = {
    employees: null,
    loading: false
  };

export default function(state = initialState, action) {
    switch(action.type) {   
        case SET_EMPLOYEE_RECORD:
             return {
                 ...state,
                 employee: action.payload,
                 loading: false
             }
        case GET_ALL_EMPLOYEE_RECORD:
             return {
                 ...state,
                 employees: action.payload,
                 loading: false
             }    
        default:
            return state;

    }
}