import { CssBaseline } from "@mui/material";
import * as React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./demo";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Demo />
  </React.StrictMode>
);
