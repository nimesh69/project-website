// import * as React from "react";
import Navbar from "../Components/navbar";
import { Outlet } from "react-router";
import {Footer} from "../Components/contactus"

export function BaseLayout(){
    return(
        <main>
            <Navbar/>
            <Outlet />
            <Footer/>
        </main>
    );

    
}