-- RLS policies for Agent Console (anon read-only)
-- TODO: replace with auth-scoped policies before making the console public

ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_read_conversations"
  ON conversations FOR SELECT TO anon USING (true);

CREATE POLICY "anon_read_messages"
  ON messages FOR SELECT TO anon USING (true);

-- Enable real-time replication for both tables
ALTER PUBLICATION supabase_realtime ADD TABLE conversations;
ALTER PUBLICATION supabase_realtime ADD TABLE messages;
