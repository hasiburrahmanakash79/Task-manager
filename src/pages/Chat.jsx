import { useState} from "react";
import { FiSend } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", sender: "bot", time: "10:00 AM" },
    { id: 2, text: "I need help with project management tasks.", sender: "user", time: "10:01 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: Date.now(),
        text: newMessage,
        sender: "user",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...messages, userMessage]);
      setNewMessage("");
      setIsTyping(true);

      // Simulate bot typing delay
      setTimeout(() => {
        setIsTyping(false);
        handleBotResponse(userMessage.text);
      }, 1000);
    }
  };

  const handleBotResponse = (userText) => {
    // Simple bot responses based on keywords
    let botResponseText = "I'm here to help you with your questions.";
    if (userText.toLowerCase().includes("project")) {
      botResponseText = "Can you give me more details about your project?";
    } else if (userText.toLowerCase().includes("task")) {
      botResponseText = "I can help you manage your tasks efficiently.";
    } else if (userText.toLowerCase().includes("hello")) {
      botResponseText = "Hello! How can I assist you today?";
    }

    const botMessage = {
      id: Date.now() + 1,
      text: botResponseText,
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Chat Support</h1>
        <button className="text-indigo-200 hover:text-white transition">
          <IoMdClose size={24} />
        </button>
      </div>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex flex-col p-4 max-w-xs rounded-2xl shadow ${
                message.sender === "user"
                  ? "bg-indigo-500 text-white self-end"
                  : "bg-gray-200 text-gray-800 self-start"
              }`}
            >
              <span className="text-sm">{message.text}</span>
              <span className="text-xs text-gray-300 mt-1 text-right">{message.time}</span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start items-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping delay-150"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping delay-300"></div>
            <span className="text-sm text-gray-400">Bot is typing...</span>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="bg-white p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-full p-3 mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="bg-indigo-500 p-3 rounded-full text-white hover:bg-indigo-600 transition shadow"
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
