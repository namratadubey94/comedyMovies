import page1Data from "../../API/CONTENTLISTINGPAGE-PAGE1.json";
import page2Data from "../../API/CONTENTLISTINGPAGE-PAGE2.json";
import page3Data from "../../API/CONTENTLISTINGPAGE-PAGE3.json";
import { put, all, takeEvery } from 'redux-saga/effects';


import {
    fetchRComedyRequest,
    fetchRComedySuccess,
    fetchRComedyFailure
} from './romanticComedyReducer';

/**********************/
function* fetchRComedyWorker({ payload }) {
    const { page, callback } = payload
    try {
        let data = null;
        switch (page) {
            case 1:
                data = page1Data.page["content-items"].content;
                break;
            case 2:
                data = page2Data.page["content-items"].content;
                break;

            case 3:
                data = page3Data.page["content-items"].content;
                break;
            default:
                data = page1Data.page["content-items"].content;
                break;
        }
        if (callback) callback(null, data);
        yield put(fetchRComedySuccess(data));
    } catch (err) {
        if (callback) callback(err.message, null);
        yield put(fetchRComedyFailure(err));
    }
}

export function* romanticComedySaga() {
    yield all([
        takeEvery(fetchRComedyRequest, fetchRComedyWorker)
    ]);
}
