import React from 'react';
import './sidebar-thread.css';
import { Avatar } from "@material-ui/core";
import {useNavigate} from 'react-router-dom';


function SidebarThread({ onClick, threadName }) {

    return (
        <div className={"sidebarThread"} onClick={onClick}>
            <Avatar />
            <div className={"sidebarThread_details"}>

                <h3>{threadName}</h3>
                {/*<p>message</p>*/}
            </div>
        </div>
    );
};

export default SidebarThread;
