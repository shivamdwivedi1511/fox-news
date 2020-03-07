import { Home, NewsPage } from "../components";
import { RoutePath } from "../constant";

const publicRoutes = [
    {
        path: RoutePath.HOME,
        component: Home,
        exact: true
    }, {
        path: RoutePath.LIST,
        component: NewsPage,
        exact: true
    }];

export default publicRoutes;