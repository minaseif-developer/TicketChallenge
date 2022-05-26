import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListTicket from '../page/listTicket'
import CreateTicket from '../page/createTicket'
import DetailsTicket from '../page/details'

const Router = () => {
  return (
    <Routes>
      <Route index={false} path="/listTicket" element={<ListTicket />} />
      <Route index={false} path="/createTicket" element={<CreateTicket />} />
      <Route index={false} path="/detailsTicket/:id" element={<DetailsTicket />} />
    </Routes>
  )
}
export default Router
