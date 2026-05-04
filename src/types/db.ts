export interface Conversation {
  id: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  conversation_id: string;
  whatsapp_msg_id: string | null;
  role: "user" | "assistant";
  message_type: "text" | "audio";
  content: string;
  created_at: string;
}
