import { take, fork, put, call } from 'redux-saga/effects'
import request from '../utils'
import { addTodo } from '../actions'

function* ajax(url) {
  const { status, text } = yield call(request, url)
  if (status !== 200) {
    yield put({ type: 'REQUEST_ERROR', text })
    return false
  }
  yield put({ type: 'REQUEST_SUCCESS' })
  return true
}

function* verifyToDo() {
  while (true) {
    const { text } = yield take('VERIFY_TODO')
    if (yield ajax(`/verify?text=${encodeURIComponent(text)}`)) {
      yield put(addTodo(text))
    }
  }
}

export default function* root() {
  yield [
    fork(verifyToDo)
  ]
}
