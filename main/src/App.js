import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import supabase from "./config/supabaseClient";

function App() {
  console.log(supabase);
  return <RouterProvider router={routes} />;
}

export default App;
