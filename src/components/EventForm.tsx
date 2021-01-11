import { useContext, useState } from 'react'

import { EventAction, OperationLogAction } from '../actions'

import AppContext from '../contexts/AppContext'

import { timeCurrentIso8601 } from '../utils'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  const addEvent = (e: any) => {
    e.preventDefault()
    dispatch({
      type: EventAction.Create,
      title,
      body
    })
    dispatch({
      type: OperationLogAction.Create,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601()
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = (e: any) => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) {
      dispatch({ type: EventAction.DeleteAll })
      dispatch({
        type: OperationLogAction.Create,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const deleteAllOperationLogs = (e: any) => {
    e.preventDefault()
    const result = window.confirm('全ての操作ログを本当に削除しても良いですか？')
    if (result) dispatch({ type: OperationLogAction.DeleteAll })
  }

  const unCreatable = title === '' || body === ''

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button>
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>
      </form>
    </>
  )
}

export default EventForm
