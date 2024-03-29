import { useContext } from 'react'

import OperationLog from './OperationLog'

import AppContext from '../contexts/AppContext'

import { OperationLogState } from '../reducers'

const OperationLogs = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {
            state.operationLogs.map((operationLog: OperationLogState, index: number) => {
              return <OperationLog key={index} operationLog={operationLog} />
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default OperationLogs
