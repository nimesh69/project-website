import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes} from "react-router";
import { BaseLayout } from "./layout/base";
import { Homepage } from "./pages/home";
import {Loginpage} from "./Components/loginpage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<BaseLayout />}>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/login"} element={<Loginpage />}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>
);
