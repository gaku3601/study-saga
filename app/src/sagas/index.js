import { all } from 'redux-saga/effects'

import countup from './countup';
import countdown from './countdown';

export default function* rootSaga() {
  yield all([
    ...countup,
    ...countdown,
  ])
}
