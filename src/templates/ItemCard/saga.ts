import { takeEvery, put, call } from "redux-saga/effects";
import { actions, requestCard } from "./reducer";
import { TItemCard } from "./types";

export function* requestCardSaga({ payload: id }: { payload: string }) {
  try {
    yield put(actions.setCardLoading(true));
    yield put(actions.setCardError(false));
    const response: { json: () => TItemCard } = yield call(
      fetch,
      `${process.env.REACT_APP_HOST_API}/services/${id}`
    );
    const data: TItemCard = yield response.json();
    yield put(actions.setCard(data));
  } catch (e) {
    yield put(actions.setCardError(true));
    console.error((e as Error).message);
  } finally {
    yield put(actions.setCardLoading(false));
  }
}

export function* itemCardSaga() {
  yield takeEvery(requestCard, requestCardSaga);
}
