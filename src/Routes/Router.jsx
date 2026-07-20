import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import Packages from "../Pages/Packages/Packages";
import TourDetails from './../Pages/TourDetails/TourDetails';
import Booking from "../Pages/Booking/Booking";
import BookingSuccess from "../Pages/BookingSuccess/BookingSuccess";
import MyBookings from "../Pages/MyBookings/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/packages/:id",
        element: <TourDetails />,
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking/>
          </PrivateRoute>
        ),
      },
      {
        path: "/booking-success",
        element: (
          <PrivateRoute>
            <BookingSuccess/>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;