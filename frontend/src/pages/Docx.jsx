import React from 'react'
import DocsLayout from '../layout/DocsLayout'
import { Outlet } from 'react-router-dom'

const Docx = () => {
  return (
    <main>
      <h1>hello this is documnet page</h1>
      <Outlet />
    </main>
  )
}

export default Docx