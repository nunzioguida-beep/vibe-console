import { useEffect, useRef } from "react";
import { useMessages } from "../hooks/useMessages";
import { MessageBubble } from "./MessageBubble";
import { Conversation } from "../types/db";

interface Props {
  conversation: Conversation | null;
}

export function ConversationView({ conversation }: Props) {
  const { messages, loading } = useMessages(conversation?.id ?? null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!conversation) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
        Select a conversation to view messages
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Thread header */}
      <div className="px-6 py-3 border-b border-gray-200 bg-white flex-shrink-0">
        <p className="text-sm font-semibold text-gray-800">{conversation.phone}</p>
        <p className="text-xs text-gray-400">
          Started {new Date(conversation.created_at).toLocaleDateString()}
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50">
        {loading && (
          <p className="text-sm text-gray-400 text-center mt-8">Loading messages...</p>
        )}

        {!loading && messages.length === 0 && (
          <p className="text-sm text-gray-400 text-center mt-8">No messages</p>
        )}

        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
