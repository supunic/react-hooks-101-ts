import { useContext } from 'react'

import Event from './Event'

import AppContext from '../contexts/AppContext'

import { EventState } from '../reducers'

const Events = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.events.map((event: EventState, index: number) => <Event key={index} event={event} />) }
        </tbody>
      </table>
    </>
  )
}

export default Events
