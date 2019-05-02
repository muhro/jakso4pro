import React from 'react'

function Message(messages) {
    return (
        <div className="message">
            <div className="message-username">{messages.username}</div>
            <div className="message-text">{messages.text}</div>
        </div>
    )
}

export default Message