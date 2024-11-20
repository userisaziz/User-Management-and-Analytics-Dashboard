import adminSlice from "../views/afterAuth/admin/_redux/reducer"
import updaterSlice from "../views/afterAuth/updater/_redux/reducer"
export const rootReducer = {
	admin: adminSlice,
	updater: updaterSlice
};
