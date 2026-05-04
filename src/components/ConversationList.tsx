import { Conversation } from "../types/db";
import { relativeTime } from "../lib/time";

interface Props {
  conversations: Conversation[];
  loading: boolean;
  selected: string | null;
  onSelect: (id: string) => void;
}

export function ConversationList({
  conversations,
  loading,
  selected,
  onSelect,
}: Props) {
  return (
    <aside className="w-72 flex-shrink-0 border-r border-gray-200 flex flex-col bg-white">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Conversations
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading && (
          <p className="text-sm text-gray-400 text-center mt-8">Loading...</p>
        )}

        {!loading && conversations.length === 0 && (
          <p className="text-sm text-gray-400 text-center mt-8">
            No conversations yet
          </p>
        )}

        {conversations.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
              selected === c.id ? "bg-blue-50 border-l-2 border-l-blue-600" : ""
            }`}
          >
            <p
              className={`text-sm font-medium truncate ${
                selected === c.id ? "text-blue-700" : "text-gray-800"
              }`}
            >
              {c.phone}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {relativeTime(c.updated_at)}
            </p>
          </button>
        ))}
      </div>
    </aside>
  );
}
