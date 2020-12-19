import React from 'react'
//@ts-ignore
import Board from 'react-trello'
import data from './data'

export default class Table extends React.Component {
  render() {
    return <Board<{ dbId: number }>
    data={data.mockTableData}
    />
  }
}