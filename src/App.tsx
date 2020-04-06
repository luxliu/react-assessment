import React from "react";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";

import { creditCardReducers } from "./redux";
import Register from "./pages/register/index";
import Layout from "./layouts/Layout";

import "./App.css";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const store = createStore(
  creditCardReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <Register />
      </Layout>
    </ReduxProvider>
  );
};

export default App;
