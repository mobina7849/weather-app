import React from 'react';
import './App.scss';
import { RouterProvider  } from "react-router-dom";
import router from "./routes/routes";
import { Provider } from 'react-redux';
import {store} from './redux/store'
import {persistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist"

let persistor=persistStore(store)

function App() {
  return (
    <Provider store={store} >
      <persistGate persistor={persistor}>
         <RouterProvider router={router}/>
      </persistGate>
    </Provider >
  );
}

export default App;
