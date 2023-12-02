import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateTask from './pages/CreateTask'
import ShowTask from './pages/ShowTask'
import DeleteTask from './pages/DeleteTask'
import EditTask from './pages/EditTask'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tasks/create' element={<CreateTask />} />
      <Route path='/tasks/details/:id' element={<ShowTask />} />
      <Route path='/tasks/edit/:id' element={<EditTask />} />
      <Route path='/tasks/delete/:id' element={<DeleteTask />} />
    </Routes>
  )
}
