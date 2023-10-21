import Login from "~pages/Login";
import Informasi from "~/pages/informasi";
import Register from "~/pages/Register";
import ForgotPassword from "~/pages/Login/Recovery";
import Profile from "~/pages/Profile";
import Home from "~/pages/Home";

export const RoutePath = [
  { name: "Home", component: Home, showHeader: false },
  { name: "Login", component: Login, showHeader: false },
  { name: "Pendaftaran", component: Register, showHeader: false },
  { name: "Profile", component: Profile, showHeader: false },
  { name: "Forgot", component: ForgotPassword, showHeader: false },
  { name: "Informasi", component: Informasi, showHeader: false },
];
