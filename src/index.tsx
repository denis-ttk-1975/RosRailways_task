import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import { store } from "./App";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
