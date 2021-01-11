import { OperationLogState } from '../reducers'

const OperationLog = ({ operationLog }: { operationLog: OperationLogState }) => {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  )
}

export default OperationLog
