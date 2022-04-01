import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST, SUCCESS, FAILURE } from "utils/actionType";
import { ENDPOINT } from "shared/constants/endpoint";
import Api from "shared/configs/api";
import {} from "containers/HomePage/constants";

const { API } = ENDPOINT;

export default function* authData() {}
