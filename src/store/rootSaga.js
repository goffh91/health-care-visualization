import { all, fork } from 'redux-saga/effects';

import appSaga from './app/sagas';

export default function* rootSaga() {
    yield all([
        fork(appSaga),
    ]);
}