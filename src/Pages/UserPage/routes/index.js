import { OrderPage, AccountPage, NoticePage } from "../pages";
import { WrapperPage } from "../pages/AccountPage/pages";

const userRoutes = [
  {
    path: "order",
    element: (
      <WrapperPage>
        <OrderPage />
      </WrapperPage>
    ),
  },
  {
    path: "notice",
    element: (
      <WrapperPage>
        <NoticePage />
      </WrapperPage>
    ),
  },
  {
    path: "account/*",
    element: <AccountPage />,
  },
];

export default userRoutes;
