import React from "react";
import Albums from "./Albums";
import { Provider } from "react-redux";
import { reducers } from "../redux/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "semantic-ui-css/semantic.min.css";

const store = createStore(reducers, applyMiddleware(thunk));

export const App = () => (
  <Provider store={store}>
    <Albums />
  </Provider>
);
