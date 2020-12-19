import React from 'react'
import Board from 'react-trello'
import data from './data'
import Card from '../Card'

const Table = (props) => {
    return <Board data={data.mockTableData} components={{ Card }} />
}

export default Table
