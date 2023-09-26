import { createClient } from "@supabase/supabase-js";
import { GoTrueClient } from "@supabase/gotrue-js";


// these can come from an environment variable if desired
// not required however as they are 100% exposed on the client side anyway
// and that's ok, Supabase expects this
const supabase = createClient(
  "https://nlazvqeiruqthztafhdq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sYXp2cWVpcnVxdGh6dGFmaGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzNjA0NTYsImV4cCI6MTk5NTkzNjQ1Nn0.L21pt8BGr-ek4eWsxiWJfhRUiDgzEUC7l_Uk21Yg7lQ"
);

const auth = new GoTrueClient({
  url: "https://nlazvqeiruqthztafhdq.supabase.co/auth/v1",
  headers: {
    accept: "json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sYXp2cWVpcnVxdGh6dGFmaGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzNjA0NTYsImV4cCI6MTk5NTkzNjQ1Nn0.L21pt8BGr-ek4eWsxiWJfhRUiDgzEUC7l_Uk21Yg7lQ",
  },
});


// setup auth state listener


// expose supabase client
export default function useSupabase() {
  return { supabase , auth};
}
