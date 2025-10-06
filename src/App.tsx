import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CssBaseline from "@mui/material/CssBaseline";
import PanelLayout from "./components/layout/PanelLayout";
import TriagePage from "./page/TriagePage";

const router = createBrowserRouter([
  {
    Component: PanelLayout,
    children: [
      {
        path: "/",
        element: <TriagePage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
