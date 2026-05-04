import { useState } from "react";
import { useConversations } from "./hooks/useConversations";
import { ConversationList } from "./components/ConversationList";
import { ConversationView } from "./components/ConversationView";

export default function App() {
  const { conversations, loading } = useConversations();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = conversations.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <header className="h-12 flex-shrink-0 bg-gray-900 flex items-center px-6">
        <span className="text-white font-semibold text-sm tracking-wide">
          VIBE Agent Console
        </span>
        <span className="ml-3 text-gray-400 text-xs">Wellhub</span>
      </header>

      {/* Body */}
      <div className="flex-1 flex min-h-0">
        <ConversationList
          conversations={conversations}
          loading={loading}
          selected={selectedId}
          onSelect={setSelectedId}
        />
        <ConversationView conversation={selected} />
      </div>
    </div>
  );
}
