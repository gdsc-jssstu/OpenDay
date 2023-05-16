import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://svvcudrundqsfffmbebg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dmN1ZHJ1bmRxc2ZmZm1iZWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyMDgzNzUsImV4cCI6MTk5OTc4NDM3NX0.YFVgqanHcxhRmlFd3TRihDJL-kDM6BDB3W22_FWnjNw'
export const supabase = createClient(supabaseUrl, supabaseKey)