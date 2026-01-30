export default function LiveChat() {
  return (
    <div className="max-w-4xl h-[calc(100vh-8rem)] flex flex-col bg-white
                    rounded-xl border border-slate-200 overflow-hidden">
      {/* HEADER */}
      <div className="border-b px-6 py-4">
        <h1 className="font-semibold text-slate-900">
          Live chat support
        </h1>
        <p className="text-sm text-slate-500">
          Our support team is online 24/7
        </p>
      </div>

      {/* CHAT MESSAGES */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto scrollbar-thin">
        <ChatBubble
          sender="support"
          message="Hello 👋 How can we help you today?"
        />
        <ChatBubble
          sender="user"
          message="Hi, I need help with my trading account."
        />
      </div>

      {/* INPUT */}
      <div className="border-t p-4">
        <div className="flex gap-3">
          <input
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none"
          />
          <button
            className="bg-yellow-400 hover:bg-yellow-500
                       text-black font-medium px-4 py-2
                       rounded-lg transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Chat Bubble ---------- */

function ChatBubble({
  sender,
  message,
}: {
  sender: "support" | "user";
  message: string;
}) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg text-sm
          ${
            isUser
              ? "bg-yellow-400 text-black"
              : "bg-gray-100 text-slate-800"
          }`}
      >
        {message}
      </div>
    </div>
  );
}
