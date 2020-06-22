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
    const { page, search, callback } = payload;
    console.log("page is", page);
    console.log("search is", search);
    try {
        let data = null;
        switch (page) {
            case 1:
                if (search) {
                    data = page1Data.page["content-items"].content.filter(item => item.name === search);
                } else {
                    data = page1Data.page["content-items"].content;
                }
                break;
            case 2:
                if (search) {
                    data = page2Data.page["content-items"].content.filter(item => item.name === search)
                } else {
                    data = page2Data.page["content-items"].content;
                }
                break;
            case 3:
                if (search) {
                    data = page3Data.page["content-items"].content.filter(item => item.name === search)
                } else {
                    data = page3Data.page["content-items"].content;
                }
                console.log("data is.......", data)
                break;
            default:
                if (search) {
                    data = page1Data.page["content-items"].content.filter(item => item.name === search)
                } else {
                    data = page1Data.page["content-items"].content;
                }
                break;
        }
        if (callback) callback(null, data);
        yield put(fetchRComedySuccess({data, page}));
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
