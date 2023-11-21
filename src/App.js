import React from 'react';
import './App.css';
import Telegram from "./components/telegram/telegram";
import Thread from "./components/Thread/thread";
import sidebarThread from "./components/sidebar-thread/sidebar-thread";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import SidebarThread from "./components/sidebar-thread/sidebar-thread";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Sidebar />
              <Routes>
                  {/*<Route path="/sidebar" element={<Sidebar />} />*/}
                  <Route path="/threads/" element={<SidebarThread />} />

                  <Route path="/threads/:id/" element={<Thread />} />
                  {/*<Route path="*" element={<Sidebar />} />*/}


              </Routes>
          </BrowserRouter>


      </div>
  );
}

export default App;
