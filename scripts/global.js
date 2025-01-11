import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const API_KEY_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bXJya21vaXdyZ3FvdWZjZHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwOTE4NDksImV4cCI6MjA1MTY2Nzg0OX0.FF7HgKVN7jOQnbqtlI6WHVbyh5xuPiY-cOsH4OSrv0E";

export const supabase = createClient('https://wxmrrkmoiwrgqoufcdty.supabase.co', API_KEY_ANON);