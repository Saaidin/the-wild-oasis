import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = "https://egxafxinckoldtnguqup.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVneGFmeGluY2tvbGR0bmd1cXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxMDQ4NDMsImV4cCI6MjAyMTY4MDg0M30.kukuBStW4CrVGq9z-6AKOHxfMOI19ZMRNXcmkxwRFyA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
