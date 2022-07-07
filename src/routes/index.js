import { HomePage, LoginPage, RegisterPage, IntroducePage, MenPage } from "../Pages";
import { EmptyLayout } from "../Layout";

const publicRoutes = [
  { path: "/", element: HomePage },
  { path: "/login", element: LoginPage, layout: EmptyLayout },
  { path: "/register", element: RegisterPage, layout: EmptyLayout },
  { path: "/introduce", element: IntroducePage },
  { path: "/men", element: MenPage },
  { path: '/*', element: HomePage }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
