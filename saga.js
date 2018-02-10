import { take, select } from 'redux-saga/effects';
import {
	SAMPLE_CALLED, } from './actions';
import { revealSelector } from './selectors';

export default function* sampleSaga() {
	while(true) {
		const beforeDispatch = yield select(revealSelector);
		console.log(beforeDispatch); // false (first run, later true)
		yield take(SAMPLE_CALLED);
		const afterDispatch = yield select(revealSelector);
		console.log(afterDispatch); // true
	}
}
