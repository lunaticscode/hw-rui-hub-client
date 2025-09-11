import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./widgets/app/ui/RootLayout.tsx";
// import NotReadyPage from "./pages/error/NotReadyPage.tsx";
import FoundationColorPage from "./pages/foundation/color";
import DashboardPage from "./pages/dashboard";
import NotFoundPage from "./pages/not-found";
import FoundationPage from "./pages/foundation";
import ComponentPage from "@pages/component/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/foundation",
        element: <FoundationPage />,
        children: [{ path: "color", element: <FoundationColorPage /> }],
      },
      {
        path: "/component",
        element: <ComponentPage />,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
