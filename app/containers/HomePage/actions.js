import { REQUEST } from "utils/actionType";
import {
  GET_LIST_USER,
  EDIT_USER_ACTION,
  ADD_USER_ACTION,
} from "containers/HomePage/constants";

export function getListUser() {
  return {
    type: REQUEST(GET_LIST_USER),
  };
}

export function createUser(dataUser) {
  return {
    type: REQUEST(ADD_USER_ACTION),
    dataUser,
  };
}

export function updateUser(id, dataUser) {
  return {
    type: REQUEST(EDIT_USER_ACTION),
    id,
    dataUser,
  };
}
