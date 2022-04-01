import { createSelector } from "reselect";
import { initialState } from "containers/HomePage/reducer";

const selectHomePage = (state) => state.home || initialState;

export { selectHomePage };
