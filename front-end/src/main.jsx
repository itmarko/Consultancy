import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PublicRouter from "./Router/PublicRouter.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PublicRouter />
  </StrictMode>
);
