import { combineReducers } from "redux";
import albums from "./albums";
import photos from "./photos";

export const reducers = combineReducers({ albums, photos });
