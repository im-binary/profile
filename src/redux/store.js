import { legacy_createStore as createStore } from "redux";
import { themeReducer } from "./reducers/themeReducer";

const store = createStore(themeReducer);

export { store };
