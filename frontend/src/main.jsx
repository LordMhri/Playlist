import React,{StrictMode} from "react";
import "./index.css";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import songsReducer from "./redux/songSlice.js";
import rootSaga from "./redux/sagas.js";
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "@redux-devtools/extension";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saga),
  devTools: composeWithDevTools(), // Enable Redux DevTools
});
saga.run(rootSaga);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <App />
    </StrictMode>
    </Provider>,
)