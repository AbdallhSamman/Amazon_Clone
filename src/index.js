import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, {initialState} from "./reducer";
import { StateProvider } from "./StateProvider";
// import Login from './components/Firebase/Login'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}> 
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

/*reducer: we use it to push the data from product component after action(add to cart) to the datalayer
and then from the datalayer to the cart
*/