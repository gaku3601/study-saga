import { takeLatest } from 'redux-saga/effects'

function increment(action) {
  console.log('inc!')
}

const countup = [
  takeLatest('INC', increment),
]
export default countup;
