import { OperationLogAction } from '../actions'

export interface OperationLogState {
  description: string
  operatedAt: string
}

interface OperationLogCreateAction extends OperationLogState {
  type: OperationLogAction.Create
}

interface OperationLogDeleteAllAction {
  type: OperationLogAction.DeleteAll
}

export type OperationLogActions = OperationLogCreateAction | OperationLogDeleteAllAction

const operationLogs = (state: OperationLogState[] = [], action: OperationLogActions): OperationLogState[] => {
  switch(action.type) {
    case OperationLogAction.Create:
      return [
        {
          description: action.description,
          operatedAt: action.operatedAt
        },
        ...state
      ]
    case OperationLogAction.DeleteAll:
      return []
    default:
      return state
  }
}

export default operationLogs
