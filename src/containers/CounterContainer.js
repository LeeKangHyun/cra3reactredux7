import React from 'react'
import { useSelector, useActions } from 'react-redux'
import Counter from '../components/Counter'
import { increment, decrement } from '../modules/counter'

const CounterContainer = () => {
  const counter = useSelector(state => state.counter, [])
  
  const [ onIncrease, onDesrease ] = useActions([increment, decrement], [])
  
  return <Counter number={counter} onIncrease={onIncrease} onDecrease={onDesrease} />
}

export default CounterContainer
