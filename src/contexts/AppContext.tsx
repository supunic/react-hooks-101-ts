import { Dispatch, createContext } from 'react'

import { initialAppState, EventActions, OperationLogActions } from '../reducers'

interface AppContextValue {
  state: typeof initialAppState
  dispatch: Dispatch<EventActions | OperationLogActions>
}

const initialContextValue: AppContextValue = {
  state: initialAppState,
  dispatch: () => {},
}

const AppContext = createContext<AppContextValue>(initialContextValue)

export default AppContext
