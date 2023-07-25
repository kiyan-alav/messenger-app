import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import Loading from "./component/Loading/Loading";

function App() {
  // return <RouterProvider router={routes} />;
  return <Loading />;
}

export default App;
