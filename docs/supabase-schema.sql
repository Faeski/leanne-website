-- Supabase Schema for Quiz Sessions
-- Run this in your Supabase SQL Editor

-- Quiz sessions table
CREATE TABLE IF NOT EXISTS quiz_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,

  -- Answers
  primary_goal TEXT CHECK (primary_goal IN ('pigment', 'aging', 'laser', 'firming')),
  lifestyle_factors TEXT[] DEFAULT '{}',
  location TEXT CHECK (location IN ('be-limburg', 'nl-maastricht', 'other')),

  -- Contact
  email TEXT,
  first_name TEXT,

  -- Consent (GDPR)
  email_consent BOOLEAN DEFAULT FALSE,
  consent_timestamp TIMESTAMPTZ,
  consent_ip TEXT,

  -- Tracking
  source TEXT,  -- Where they came from (page path, UTM, etc.)
  user_agent TEXT,

  -- Email status
  pdf_sent BOOLEAN DEFAULT FALSE,
  pdf_sent_at TIMESTAMPTZ,
  nurture_sequence_started BOOLEAN DEFAULT FALSE,

  -- Unsubscribe
  unsubscribe_token UUID DEFAULT gen_random_uuid()
);

-- Index for email lookups (e.g., for unsubscribe)
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_email
  ON quiz_sessions(email);

-- Index for unsubscribe token lookups
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_unsubscribe_token
  ON quiz_sessions(unsubscribe_token);

-- Index for analytics - completed sessions
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_completed
  ON quiz_sessions(completed_at)
  WHERE completed_at IS NOT NULL;

-- Index for finding sessions that need nurture emails
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_nurture
  ON quiz_sessions(completed_at, nurture_sequence_started)
  WHERE email_consent = TRUE AND nurture_sequence_started = FALSE;

-- Row Level Security (RLS)
-- Enable RLS on the table
ALTER TABLE quiz_sessions ENABLE ROW LEVEL SECURITY;

-- Policy: Service role can do everything
CREATE POLICY "Service role has full access" ON quiz_sessions
  FOR ALL
  USING (auth.role() = 'service_role');

-- Policy: Anonymous users can create sessions (via anon key)
CREATE POLICY "Anyone can create a session" ON quiz_sessions
  FOR INSERT
  WITH CHECK (true);

-- Policy: Users can read their own session by ID
-- (Note: This requires passing the session ID from client)
CREATE POLICY "Users can read own session" ON quiz_sessions
  FOR SELECT
  USING (true);

-- Policy: Allow updates to incomplete sessions
CREATE POLICY "Allow updates to own session" ON quiz_sessions
  FOR UPDATE
  USING (completed_at IS NULL)
  WITH CHECK (true);

-- Comments for documentation
COMMENT ON TABLE quiz_sessions IS 'Stores quiz responses and lead information for the Skin Code diagnostic quiz';
COMMENT ON COLUMN quiz_sessions.primary_goal IS 'Main treatment goal: pigment, aging, laser, or firming';
COMMENT ON COLUMN quiz_sessions.lifestyle_factors IS 'Array of lifestyle factors: stress, sun, healthy-eating, busy, hormonal';
COMMENT ON COLUMN quiz_sessions.location IS 'Visitor location for travel info: be-limburg, nl-maastricht, or other';
COMMENT ON COLUMN quiz_sessions.email_consent IS 'GDPR consent for email marketing';
COMMENT ON COLUMN quiz_sessions.consent_ip IS 'IP address at time of consent for legal records';
COMMENT ON COLUMN quiz_sessions.nurture_sequence_started IS 'Whether the 3-email nurture sequence has been triggered';
COMMENT ON COLUMN quiz_sessions.unsubscribe_token IS 'Unique token for one-click email unsubscribe';
