import { takeLatest } from 'redux-saga/effects'

function decrement(action) {
  console.log('dec!')
}

const countdown = [
  takeLatest('DEC', decrement),
]
export default countdown;
