import { createSelector } from "reselect";
import { initialState } from "containers/HomePage/reducer";

const selectHomePage = (state) => state.home || initialState;

const makeSelectDataListUser = () =>
  createSelector(
    selectHomePage,
    (userPage) => userPage.dataListUSer
  );

const makeSelectDataAddUser = () =>
  createSelector(
    selectHomePage,
    (userPage) => userPage.dataAddUser
  );

const makeSelectDataEditUser = () =>
  createSelector(
    selectHomePage,
    (userPage) => userPage.dataEditUser
  );

const makeSelectDataDetailUser = () =>
  createSelector(
    selectHomePage,
    (userPage) => userPage.dataDetailUser
  );

export {
  selectHomePage,
  makeSelectDataListUser,
  makeSelectDataEditUser,
  makeSelectDataAddUser,
  makeSelectDataDetailUser,
};
