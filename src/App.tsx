import React, { useState } from 'react'

const App = (props: defaultProps) => {
  const [state, setState] = useState(props)
  const { name, price } = state

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={(): void => setState({...state, price: price + 1})}>+1</button>
      <button onClick={(): void => setState({...state, price: price - 1})}>-1</button>
      <button onClick={(): void => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} type="text"/>
    </>
  )
}

type defaultProps = {
  name: string
  price: number
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
