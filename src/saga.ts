import { fork } from "redux-saga/effects";
import { itemListSaga } from "@/templates/ItemList/saga";
import { itemCardSaga } from "@/templates/ItemCard/saga";

export function* rootSaga() {
  yield fork(itemListSaga);
  yield fork(itemCardSaga);
}
