import React, { useState } from "react";

function MiniChatApp() {

  // State for Current Input

  const [typedMessage, setTypedMessage] = useState("");

  // State for All Messages

  const [chatMessages, setChatMessages] = useState([]);

  // Handle Send Message

  const handleSendMessage = () => {

    // Prevent Empty Messages

    if (typedMessage.trim() === "") {
      return;
    }

    // Add New Message

    setChatMessages([
      ...chatMessages,
      typedMessage
    ]);

    // Clear Input Field

    setTypedMessage("");

  };

  return (

    <div className="chat-wrapper">

      <div className="chat-container">

        <h1>Mini Chat Application</h1>

        {/* Input & Button */}

        <div className="chat-input-section">

          <input
            type="text"
            placeholder="Type your message..."
            value={typedMessage}
            onChange={(event) =>
              setTypedMessage(event.target.value)
            }
          />

          <button onClick={handleSendMessage}>
            Send Message
          </button>

        </div>

        {/* Display Messages */}

        <div className="messages-container">

          {
            chatMessages.map((messageItem, index) => (

              <div
                className="message-box"
                key={index}
              >

                {messageItem}

              </div>

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default MiniChatApp;