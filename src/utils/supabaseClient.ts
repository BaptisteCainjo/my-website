import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ztecoljjakrlgrkwxciu.supabase.co/";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0ZWNvbGpqYWtybGdya3d4Y2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MjYxMzAsImV4cCI6MjA2ODAwMjEzMH0.c-wFBowvkTyz2X57JAsuevM_JjACYD_XQiucj0ylfVQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
