import { HomePage, LoginPage, RegisterPage, IntroducePage, MenPage, Cart, ViewCartPage } from "../Pages";
import { EmptyLayout } from "../Layout";

const publicRoutes = [
  { path: "/", element: HomePage },
  { path: "/login", element: LoginPage, layout: EmptyLayout },
  { path: "/register", element: RegisterPage, layout: EmptyLayout },
  { path: "/introduce", element: IntroducePage },
  { path: "/men", element: MenPage },
  { path: "/women", element: MenPage },
  { path: "/children", element: MenPage },
  { path: "/other", element: MenPage },
  { path: "/cart", element: Cart },
  { path: "/view_cart", element: ViewCartPage },
  { path: '/*', element: HomePage }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
