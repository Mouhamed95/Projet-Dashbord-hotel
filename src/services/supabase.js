
import { createClient } from '@supabase/supabase-js'
export  const supabaseUrl = 'https://gdicgoemdcgecuymzvfx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkaWNnb2VtZGNnZWN1eW16dmZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0ODAyMzgsImV4cCI6MjA0NDA1NjIzOH0.5Swy1UFy_xtdZxJH1pWS8-6i4pS9xf2jey27NGTJ7YA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase