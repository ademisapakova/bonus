import React from 'react'
import Sidebar from "../sidebar/sidebar";
import Thread from "../Thread/thread";
import './telegram.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import sidebarThread from "../sidebar-thread/sidebar-thread";

function Telegram() {
    return (
        <div className={"telegram"}>

            <BrowserRouter>
                <Sidebar />
                <Thread/>
                <Routes>
                    <Route path="/threads/:id" element=<Thread /> />
                    <Route path="/sidebar" element=<Sidebar /> />

                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Telegram