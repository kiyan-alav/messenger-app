import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://puerxzgdqfjyvsizayzy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1ZXJ4emdkcWZqeXZzaXpheXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAwOTM1MjUsImV4cCI6MjAwNTY2OTUyNX0.JLUDPTk0jPcYZGS2MulrUZg2ilSZ3iU1bGFzeFjhe40";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
