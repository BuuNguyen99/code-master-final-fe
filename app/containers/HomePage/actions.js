import { REQUEST } from "utils/actionType";
import {
  GET_LIST_USER,
  EDIT_USER_ACTION,
  ADD_USER_ACTION,
  GET_DETAIL_USER,
  SUBMIT_REVIEW_ACTION,
} from "containers/HomePage/constants";

export function getListUser() {
  return {
    type: REQUEST(GET_LIST_USER),
  };
}

export function createUser(dataUser, callBack) {
  return {
    type: REQUEST(ADD_USER_ACTION),
    dataUser,
    callBack,
  };
}

export function updateUser(id, dataUser, callBack) {
  return {
    type: REQUEST(EDIT_USER_ACTION),
    id,
    dataUser,
    callBack,
  };
}

export function getDetailUser(id) {
  return {
    type: REQUEST(GET_DETAIL_USER),
    id,
  };
}

export function submitReview(dataSubmit, callBack) {
  return {
    type: REQUEST(SUBMIT_REVIEW_ACTION),
    dataSubmit,
    callBack,
  };
}
