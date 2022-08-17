import React from 'react'

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      filter shown with <input type='text' value={filter} onChange={onFilterChange} />
    </div>
  )
}

export default Filter
