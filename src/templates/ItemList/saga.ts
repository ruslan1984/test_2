import { takeEvery, put, call } from "redux-saga/effects";
import { actions, requestList } from "./reducer";
import { TItem } from "./types";

export function* requestListSaga() {
  try {
    yield put(actions.setListLoading(true));
    yield put(actions.setListError(false));
    const response: { json: () => TItem[] } = yield call(
      fetch,
      `${process.env.REACT_APP_HOST_API}/services`
    );
    const data: TItem[] = yield response.json();
    yield put(actions.setList(data));
  } catch (e) {
    yield put(actions.setListError(true));
    console.error((e as Error).message);
  } finally {
    yield put(actions.setListLoading(false));
  }
}

export function* itemListSaga() {
  yield takeEvery(requestList, requestListSaga);
}
