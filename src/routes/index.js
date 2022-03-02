import App from "../App";

export const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/dashboard",
    component: App,
  },
  {
    path: "/dashboard/:id",
    component: App,
  },
];
