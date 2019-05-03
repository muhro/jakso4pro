import React from 'react'
import ReactDOM from 'react-dom'
import Messages from './Message'


class MessageList extends React.Component {



    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

    render() {

        if (!this.props.roomId) {
            return (
                <div className="message-list">
                    <div className="join-room">
                        &#8601; Kysy Kysymys
                    </div>
                </div>
            )
        } else
        return (
            <div className="message-list">
                <p>TÄHÄN KYSYMYS ROOMLIST:JS STÄ</p>
                {this.props.messages.map((messages, index) => {

                    return (
                        <div>

                        <Messages key={messages.id} username={messages.senderId} text={messages.text} />
                        </div>

                    )
                })}
            </div>
        )
    }
}

export default MessageList