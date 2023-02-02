import { createStore } from "redux";
import reducer from "./reducer/reducer";
import { initialState } from "./initialState/initialState";

const store = createStore(reducer)

export default store