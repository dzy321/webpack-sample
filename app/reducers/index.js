import { combineReducers } from 'redux'
import * as todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  ...todos,
  visibilityFilter
})

export default todoApp
