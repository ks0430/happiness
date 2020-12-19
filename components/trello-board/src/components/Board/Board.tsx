import React from 'react'
import Board from 'react-trello'
import data from './data'
import Card from '../Card'

export default class Table extends React.Component {
  render() {
    return <Board
    data={data.mockTableData}
    components={{Card}}
    />
  }
}