import { Profile, Address, ChangePassword, WrapperPage } from "../pages";

export const accountRoutes = [
  {
    path: "profile",
    element: (
      <WrapperPage>
        <Profile />
      </WrapperPage>
    ),
  },
  {
    path: "address",
    element: (
      <WrapperPage>
        <Address />
      </WrapperPage>
    ),
  },
  {
    path: "change_password",
    element: (
      <WrapperPage>
        <ChangePassword />
      </WrapperPage>
    ),
  },
];
