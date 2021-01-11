import { combineReducers } from 'redux'

import events, { EventState, EventActions } from './events'
import operationLogs, { OperationLogState, OperationLogActions } from './operationLogs'

export type {
  EventState,
  EventActions,
  OperationLogState,
  OperationLogActions
}

export const initialAppState: {
  events: EventState[]
  operationLogs: OperationLogState[]
} = {
  events: [],
  operationLogs: []
}

export default combineReducers({
  events,
  operationLogs
})
