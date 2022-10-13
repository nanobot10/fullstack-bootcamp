import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';


// Watcher SAGA
// Listens the API_CALL_REQUEST actions

export function* watcherSaga() {
    //Listen the action and starts a Worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// worker saga
// is called from watcher saga, does the login and dispatches an action
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload.request));
        const token = response.data.token;
        yield put ({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        })
    } catch (error) {
        yield put ({
            type: action.payload.failAction,
            payload: {
                error: error
            }
        })
    }
}

function fetchHttp(request) {
    return function() {
        return(axios(request))
    }
}