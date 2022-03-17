import NotFound from "../containers/NotFound/NotFound";
import Clients from "../containers/Clients/Clients";
import Detal from "../containers/Detal/Detal";
import Model from "../containers/Model/Model";
import Main from "../containers/Main/Main";

export const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/clients",
    component: Clients,
  },
  {
    path: "/detal",
    component: Detal,
  },
  {
    path: "/model",
    component: Model,
  },
  {
    path: "/*",
    component: NotFound,
  },
];
