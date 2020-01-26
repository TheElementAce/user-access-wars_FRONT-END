import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

import "./styles.css";
import Layout from "./components/Layout";

import { winner } from "./schema/users";

const App = () => {
  return (
    <div className="App">
      <Provider store={createStore(reducers)}>
        <Layout />
      </Provider>
    </div>
  );
};

console.log(winner);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
