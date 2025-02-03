import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConversationProvider } from "./components/moleculess/ConversationContext";

ReactDOM.render(
  <React.StrictMode>
    <ConversationProvider>
      <App />
    </ConversationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
