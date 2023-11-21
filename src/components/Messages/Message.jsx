import React from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core'


function Message({ content, timestamp, isMe }) {
    return (
        <div className={`message ${isMe ? 'isMe' : ''}`}>
            {!isMe && <Avatar className="message_photo" />}
            <div className="message_contents">
                <p className="message_content">{content}</p>
                <small className="message_timestamp">{timestamp}</small>
            </div>
            {isMe && <Avatar className="message_photo" />}
        </div>
    );
}

export default Message;