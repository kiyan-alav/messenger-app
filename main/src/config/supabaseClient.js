import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "YOUR_API-URL";
const supabaseKey = "YOUR_API_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
