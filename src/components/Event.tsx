import { useContext } from 'react'

import { EventAction, OperationLogAction } from '../actions'

import AppContext from '../contexts/AppContext'

import { EventState } from '../reducers'

import { timeCurrentIso8601 } from '../utils'

const Event = ({ event }: { event: EventState }) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント（id=${id}）を本当に削除しても良いですか？`)
    if (result) {
      dispatch({ type: EventAction.Delete, id })
      dispatch({
        type: OperationLogAction.Create,
        description: `イベント（id=${id}）を削除しました。`,
        operatedAt: timeCurrentIso8601(),
      })
    }
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event
