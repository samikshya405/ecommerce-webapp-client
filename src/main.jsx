import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <App />
        </PersistGate>
        {/* <App/> */}
      </Provider>

      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
