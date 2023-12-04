import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Mission,
  Necrology,
  Home,
  Team,
  Gallery,
  HomeLayout,
  Landing,
  Error,
  Login,
  Register,
  Updates,
  Contact,
  ResetPassword,
  ForgotPassword,
  DashboardLayout,
  AddMembers,
  AllMembers,
  Announcement,
  AssociationList,
  Stats,
  Profile,
  Admin,
} from "./pages";

import { ErrorElement } from "./components";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";

// loaders

// actions

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "team",
        element: <Team />,
        errorElement: <ErrorElement />,
      },
      {
        path: "gallery",
        element: <Gallery />,
        errorElement: <ErrorElement />,
      },
      {
        path: "mission",
        element: <Mission />,
      },
      {
        path: "updates",
        element: <Updates />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "necrology",
        element: <Necrology />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
    errorElement: <Error />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    loader: dashboardLoader,
    children: [
      {
        index: true,
        element: <AddMembers />,
        errorElement: <ErrorElement />,
      },
      {
        path: "all-members",
        element: <AllMembers />,
        errorElement: <ErrorElement />,
      },
      {
        path: "stats",
        element: <Stats />,
        errorElement: <ErrorElement />,
      },
      {
        path: "announcement",
        element: <Announcement />,
        errorElement: <ErrorElement />,
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <ErrorElement />,
      },
      {
        path: "list",
        element: <AssociationList />,
        errorElement: <ErrorElement />,
      },
      {
        path: "admin",
        element: <Admin />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
