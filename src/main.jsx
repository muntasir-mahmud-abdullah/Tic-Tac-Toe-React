import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Game from "./App.jsx";
import "./index.css";
/*->Game 
  ->board 
    ->sqaure 
  ->history
  */
 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Game />
  </StrictMode>
);
