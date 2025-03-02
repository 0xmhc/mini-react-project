import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rfkudzseyopgysqspsff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJma3VkenNleW9wZ3lzcXNwc2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MjAxMzQsImV4cCI6MjA1NjQ5NjEzNH0.zvLysBH74EfvmkfBlbEV4BxdATZuoe3wOCG8jA-NsSM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
