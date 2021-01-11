import { EventAction } from '../actions'

export interface EventState {
  id: number
  title: string
  body: string
}

interface EventCreateAction {
  type: EventAction.Create
  title: string
  body: string
}

interface EventDeleteAction {
  type: EventAction.Delete
  id: number
}

interface EventDeleteAllAction {
  type: EventAction.DeleteAll
}

export type EventActions = EventCreateAction | EventDeleteAction | EventDeleteAllAction

const events = (state: EventState[] = [], action: EventActions): EventState[] => {
  switch(action.type) {
    case EventAction.Create:
      const length = state.length
      return [
        ...state,
        {
          id: length === 0 ? 1 : state[length - 1].id + 1,
          title: action.title,
          body: action.body
        }
      ]
    case EventAction.Delete:
      return state.filter(event => event.id !== action.id)
    case EventAction.DeleteAll:
      return []
    default:
      return state
  }
}

export default events
