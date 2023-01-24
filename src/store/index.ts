import { combineReducers } from "redux";
import { reducer as itemListReducer } from "@/templates/ItemList/reducer";
import { reducer as itemCardReducer } from "@/templates/ItemCard/reducer";

export const reducer = combineReducers({
  itemListReducer,
  itemCardReducer,
});

export type reducerType = ReturnType<typeof reducer>;
export default reducer;
