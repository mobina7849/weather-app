import React from 'react';
import './App.scss';
import { RouterProvider  } from "react-router-dom";
import router from "./routes/routes";
import { Provider } from 'react-redux';
import {store} from './redux/store'
import {persistStore} from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';

let persistor=persistStore(store)

function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
         <RouterProvider router={router}/>
      </PersistGate>
    </Provider >
  );
}

export default App;
