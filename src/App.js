import Sidebar from "./components/common/sidebar";
import EmailClient from "./pages/emailClient";
import UploadEmail from "./pages/UploadEmail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UploadFileButton from "./components/Other/UploadFileButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UploadEmail />,
  },
  {

    path: "/app",
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
