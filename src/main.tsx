import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import NotReadyPage from "./pages/NotReadyPage.tsx";
import FoundationPage from "./pages/FoundationPage.tsx";
import FoundationColorPage from "./pages/foundation/FoundationColorPage.tsx";

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
        element: <NotReadyPage />,
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
