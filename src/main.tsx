import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Quiz from "./pages/quiz/Quiz.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Quiz />
  </StrictMode>
);
