import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST, SUCCESS, FAILURE } from "utils/actionType";
import { ENDPOINT } from "shared/constants/endpoint";
import Api from "shared/configs/api";
import {
  GET_LIST_USER,
  EDIT_USER_ACTION,
  ADD_USER_ACTION,
  GET_DETAIL_USER,
} from "containers/HomePage/constants";

const { API } = ENDPOINT;

function getListUserApi() {
  return Api.get(API.GET_LIST_USER);
}

export function* getListUserSaga() {
  try {
    const response = yield call(getListUserApi);
    const { data } = response;
    yield put({
      type: SUCCESS(GET_LIST_USER),
      payload: data,
    });
  } catch (error) {
    yield put({ type: FAILURE(GET_LIST_USER), error });
  }
}

function createUserApi(dataUser) {
  return Api.post(API.CREATE_USER_API, dataUser);
}

export function* createUserSaga({ dataUser, callBack }) {
  try {
    const response = yield call(createUserApi, dataUser);
    const { data } = response;
    yield put({
      type: SUCCESS(ADD_USER_ACTION),
      payload: data,
    });
    callBack?.();
  } catch (error) {
    callBack?.(error);
    yield put({ type: FAILURE(ADD_USER_ACTION), error });
  }
}

function updateUserApi(params, dataUser) {
  return Api.post(API.UPDATE_USER_API, dataUser, {
    params: {
      ...params,
    },
  });
}

export function* updateUserSaga({ id, dataUser, callBack }) {
  try {
    const response = yield call(updateUserApi, id, dataUser);
    const { data } = response;
    yield put({
      type: SUCCESS(U),
      payload: data,
    });
    callBack?.();
  } catch (error) {
    callBack?.(error);
    yield put({ type: FAILURE(EDIT_USER_ACTION), error });
  }
}

function getDetailApi(params) {
  return Api.get(`${API.GET_DETAIL_API}/${params}`);
}

export function* getDetailUserSaga({ id }) {
  try {
    const response = yield call(getDetailApi, id);
    const { data } = response;
    yield put({
      type: SUCCESS(GET_DETAIL_USER),
      payload: data,
    });
  } catch (error) {
    yield put({ type: FAILURE(GET_DETAIL_USER), error });
  }
}

export default function* authData() {
  yield takeLatest(REQUEST(GET_LIST_USER), getListUserSaga);
  yield takeLatest(REQUEST(ADD_USER_ACTION), createUserSaga);
  yield takeLatest(REQUEST(EDIT_USER_ACTION), updateUserSaga);
  yield takeLatest(REQUEST(GET_DETAIL_USER), getDetailUserSaga);
}
