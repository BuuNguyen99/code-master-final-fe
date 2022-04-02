import produce from "immer";
import { REQUEST, SUCCESS, FAILURE } from "utils/actionType";
import {
  GET_LIST_USER,
  EDIT_USER_ACTION,
  ADD_USER_ACTION,
  GET_DETAIL_USER,
} from "containers/HomePage/constants";

export const initialState = {
  dataListUSer: {
    data: [],
    isFetching: false,
  },
  dataAddUser: {
    isFetching: false,
  },
  dataEditsUser: {
    isFetching: false,
  },
  dataDetailUser: {
    data: [],
    isFetching: false,
  },
};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REQUEST(GET_LIST_USER):
        draft.dataListUSer.isFetching = true;
        break;
      case SUCCESS(GET_LIST_USER):
        draft.dataListUSer.data = action.payload.data;
        draft.dataListUSer.isFetching = false;
        break;
      case FAILURE(GET_LIST_USER):
        draft.dataListUSer.isFetching = false;
        break;
      case REQUEST(GET_DETAIL_USER):
        draft.dataDetailUser.isFetching = true;
        break;
      case SUCCESS(GET_DETAIL_USER):
        draft.dataDetailUser.data = action.payload.data;
        draft.dataDetailUser.isFetching = false;
        break;
      case FAILURE(GET_DETAIL_USER):
        draft.dataDetailUser.isFetching = false;
        break;
      case REQUEST(ADD_USER_ACTION):
        draft.dataAddUser.isFetching = true;
        break;
      case SUCCESS(ADD_USER_ACTION):
        draft.dataAddUser.isFetching = false;
        break;
      case FAILURE(ADD_USER_ACTION):
        draft.dataAddUser.isFetching = false;
        break;
      case REQUEST(EDIT_USER_ACTION):
        draft.dataEditsUser.isFetching = true;
        break;
      case SUCCESS(EDIT_USER_ACTION):
        draft.dataEditsUser.isFetching = false;
        break;
      case FAILURE(EDIT_USER_ACTION):
        draft.dataEditsUser.isFetching = false;
        break;
      default:
        break;
    }
  });

export default authReducer;
