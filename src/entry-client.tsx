import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppShell } from "./App";
import "./index.css";

hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);
