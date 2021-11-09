import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./user/User.reducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userState"],
};
const RootReducer = combineReducers({
  userState: UserReducer,
});

export default persistReducer(persistConfig, RootReducer);
