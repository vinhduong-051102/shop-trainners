import { HomePage, LoginPage, RegisterPage, IntroducePage } from "../Pages"
import { EmptyLayout, MainLayout, SideBarLayout } from "../Layout"

const publicRoutes = [
  { path: '/', element: HomePage },
  { path: '/login', element: LoginPage, layout: EmptyLayout },
  { path: '/register', element: RegisterPage, layout: EmptyLayout },
  { path: '/introduce', element: IntroducePage },

]

const privateRoutes = [
  
]

export { publicRoutes, privateRoutes }