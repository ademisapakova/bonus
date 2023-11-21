import React, {useEffect, useState} from 'react';
import Message from "../Messages/Message";
import './thread.css'
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Avatar, IconButton} from "@material-ui/core";
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined'
import axios from "axios";

function Thread() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [threadDetails, setThreadDetails] = useState({});

    const {id: threadId} = useParams();


    useEffect(() => {
        const fetchThreadDetails = async () => {
            try {
                const response = await fetch(`/api/v1/threads/${threadId}/`);
                const data = await response.json();
                setThreadDetails(data);
            } catch (error) {
                console.error('Error fetching thread details:', error);
            }
        };

        const fetchMessages = async () => {
            try {
                const response = await fetch(`/api/v1/threads/${threadId}/messages/`);
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };


        if (threadId) {
            fetchThreadDetails();
            fetchMessages();
        }
    }, [threadId]);


    const sendMessage = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/v1/messages/', {
                timestamp: new Date().toISOString(),

                content: input,
                thread: threadId,
                isMe: true
            });

            setInput('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className={"thread"}>
            <div className={"thread_header"}>
                <div className={"thread_headerDetails"}>
                    <Avatar/>
                    <div className={"thread_headerDetails_info"}>
                        <h4>{threadDetails.name}</h4>
                        <h5>Just Now</h5>
                    </div>
                </div>


            </div>
            <div className={"thread_messages"}>
                {messages.map((message) => (
                    <Message
                        key={message.id}
                        content={message.content}
                        timestamp={message.timestamp}
                        isMe={message.isMe}

                    />
                ))}
            </div>
            <div className="thread_input">
                <form>
                    <input
                        placeholder="Enter a message..."
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <IconButton
                        onClick={sendMessage} type="sumbit">
                        <SendRoundedIcon/>
                    </IconButton>
                    <IconButton>
                        <MicNoneOutlinedIcon/>
                    </IconButton>
                </form>
            </div>

        </div>
    );
};

export default React.memo(Thread);