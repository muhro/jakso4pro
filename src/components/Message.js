import React from 'react'
import Profile from '../views/Profile'
import {TextField} from "@material-ui/core";

function Message(messages) {
    return (
        <div className="message">
            <div ></div>
            <div className="message-text">{messages.text}</div>
        </div>
    )
}

export default Message