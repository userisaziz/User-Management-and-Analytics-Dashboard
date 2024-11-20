import { isAdmin } from "../../utils/CheckRole/CheckRole";
import AdminHomepage from "../../views/afterAuth/admin/AdminHomepage/AdminHomepage";

export const AnalyticsComponents = [
	{ check: isAdmin, component: AdminHomepage }
];
