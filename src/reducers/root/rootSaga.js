import { all } from 'redux-saga/effects';

import { romanticComedySaga } from '../romanticComedy/romanticComedySaga';


export function* rootSaga() {
    yield all([romanticComedySaga()]);
}
