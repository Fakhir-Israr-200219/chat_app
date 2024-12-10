import { FaPaperPlane, FaPaperclip, FaSmile } from "react-icons/fa";

const ChatArea = () => {
  const messages = [
    { id: 1, sender: "John", text: "Hey there!", type: "received" },
    { id: 2, sender: "You", text: "Hello! How are you?", type: "sent" },
    { id: 3, sender: "John", text: "I'm good, thanks! You?", type: "received" },
  ];

  return (
    <div className="border-2-500  border-neutral-500 p-4 w-[70.5%] flex flex-col space-y-4">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 rounded-md space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "sent" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-lg ${
                message.type === "sent"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex items-center space-x-3 border-t pt-3">
        {/* Emoji Icon */}
        <button className="text-gray-500 hover:text-gray-700">
          <FaSmile size={20} />
        </button>
        {/* File Attachment Icon */}
        <button className="text-gray-500 hover:text-gray-700">
          <FaPaperclip size={20} />
        </button>
        {/* Input Field */}
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {/* Send Button */}
        <button className="text-red-500 hover:text-red-700">
          <FaPaperPlane size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatArea;


