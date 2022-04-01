import produce from "immer";
import { REQUEST, SUCCESS, FAILURE } from "utils/actionType";
import {} from "containers/HomePage/constants";

export const initialState = {};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });

export default authReducer;
