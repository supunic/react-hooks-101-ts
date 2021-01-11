import React, { useState } from 'react'
import Event from './Event'

const Events = ({ state, dispatch }: any) => {
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
          { state.map((event: any, index: any) => (<Event key={index} event={event} dispatch={dispatch} />)) }
        </tbody>
      </table>
    </>
  )
}

export default Events