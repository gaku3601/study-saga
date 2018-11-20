import { takeLatest, call, select, put } from 'redux-saga/effects'
import {firestore} from '../firebase/'

function* decrement(action) {
  const state = yield select();
  yield call((counter) => {
    firestore.collection("data3").doc('counter').set({
      value: counter - 1
    })
  }, state.counter)
  yield put({type: "DEC"});
}

const countdown = [
  takeLatest('DEC_REQUEST', decrement),
]
export default countdown;
