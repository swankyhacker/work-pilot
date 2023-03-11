import Sidebar from "./components/common/sidebar";
import EmailClient from "./pages/emailClient";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
  },
  {
    path: "/email-client",
    element: <EmailClient />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
