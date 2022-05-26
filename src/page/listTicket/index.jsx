import React, { useEffect, useState } from 'react'
import { EyeOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../microComponent/button'
import './style.scss'
import { read } from '../../provider/storage'
import dayjs from 'dayjs'
import { translate } from './tranlate'

const ListTicket = () => {
  const history = useNavigate()
  const [allTickets, setAllTickets] = useState([])

  useEffect(() => {
    const tickets = read('ticketList')
    let data = []
    if (tickets) {
      data = tickets.sort((a, b) => {
        return new Date(b.received) - new Date(a.received)
      })
    }
    setAllTickets(data)
  }, [])

  return (
    <div className="flex flex-col">
      <div className=" flex justify-between">
        <div className="bg-teal-500 rounded-bl-full shadow-md flex w-96 h-14 justify-center items-center ">
          <h3 className="text-1xl font-bold text-blue-50 ">لیست تیکت ها</h3>
        </div>

        <div className="flex justify-center items-center">
          <Button
            type="secondary "
            className="m-10"
            onClick={() => history('/createTicket')}
          >
            ایجاد تیکت
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4  m-10 ">
        <div>
          <ul className="flex  items-center bg-white rounded-md py-4 mb-5">
            <li className="text-teal-500 font-bold text-base  text-center w-96">
              تاریخ
            </li>
            <li className="text-teal-500 font-bold text-base  text-center w-96">
              موضوع
            </li>
            <li className="text-teal-500 font-bold text-base  text-center w-96">
              وضعیت
            </li>
            <li className="text-teal-500 font-bold text-base  text-center w-96">
              نمایش جزییات
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col ">
            {allTickets.map((item) => (
              <div
                className="flex  items-center bg-white rounded-md  py-8 mb-5 shadow-xl"
                key={item.id}
              >
                <li className="text-sm font-bold text-blue-800 text-center w-96">
                  {dayjs(item.received)
                    .calendar('jalali')
                    .format('YYYY/MM/DD HH:mm:ss')}
                </li>
                <li className="text-sm font-bold text-blue-800 text-center w-96">
                  {item.title}
                </li>
                <li className="text-sm font-bold text-blue-800 text-center w-96">
                  {translate(item.status)}
                </li>
                <li className="cursor-pointer flex self-center stroke-teal-900 text-lg icon_form">
                  <Link
                    to={`/detailsTicket/${item.id}`}
                    className="text-center w-96"
                  >
                    <EyeOutlined />
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ListTicket
