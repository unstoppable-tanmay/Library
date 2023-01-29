import React from 'react'

import Nav from "./Nav"

const Notes = () => {
  return (
    <div className="Notes w-full flex items-center flex-col">
      <Nav value={3} />
      Notes
    </div>
  )
}

export default Notes