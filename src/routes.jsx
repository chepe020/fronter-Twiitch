import { DashboardPage } from "./pages/dashboard";
import { Auth} from "./pages/auth";
const routers = [
    {path:  '/auth', element : <Auth/>},
    {path:  '/', element : <DashboardPage/>},
]

export default routers