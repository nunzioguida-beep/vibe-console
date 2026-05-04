import { Message } from "../types/db";
import { formatTime } from "../lib/time";

export function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-start" : "justify-end"} mb-3`}>
      <div
        className={`max-w-[72%] rounded-2xl px-4 py-2.5 ${
          isUser
            ? "bg-gray-100 text-gray-800 rounded-tl-sm"
            : "bg-blue-600 text-white rounded-tr-sm"
        }`}
      >
        {message.message_type === "audio" ? (
          <p className={`text-sm italic ${isUser ? "text-gray-500" : "text-blue-200"}`}>
            Voice message
          </p>
        ) : (
          <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
        )}
        <p
          className={`text-xs mt-1 select-none ${
            isUser ? "text-gray-400" : "text-blue-200"
          }`}
        >
          {formatTime(message.created_at)}
        </p>
      </div>
    </div>
  );
}
