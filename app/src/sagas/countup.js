import { takeLatest, call, select, put } from 'redux-saga/effects'
import {firestore} from '../firebase/'

function* increment(action) {
  const state = yield select();
  console.log(state)
  yield call((counter) => {
    firestore.collection("data3").doc('counter').set({
      value: counter + 1
    })
  }, state.counter)
  yield put({type: "INC"});
}

const countup = [
  takeLatest('INC_REQUEST', increment),
]
export default countup;
