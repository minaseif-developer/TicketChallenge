import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Button from '../../microComponent/button'
import { read, store } from '../../provider/storage'

const CreateTicket = () => {
  const history = useNavigate()
  let initialInput = {
    title: '',
    message: '',
  }
  const [initInput, setInitInput] = useState(initialInput)

  const handleChangeInput = (event) => {
    const name = event.target.name
    const value = event.target.value

    setInitInput({ ...initInput, [name]: value })
  }

  const submitTicket = (e) => {
    e.preventDefault()
    const getTicketList = read('ticketList')

    const model = {
      id: uuidv4(),
      received: new Date(),
      status: 'pending',
      answered:[],
      closed:false,
      ...initInput,
    }

    if (getTicketList) {
      store("ticketList",[...getTicketList, model])
    } else {
      store('ticketList',[model])
    }

    history('/listTicket')
  }

  return (
    <div className="flex flex-col">
      <div className="bg-teal-500 rounded-bl-full shadow-md flex w-96 h-14 justify-center items-center">
        <h3 className="text-1xl font-bold text-blue-50">ایجاد تیکت</h3>
      </div>
      <div className=" container mx-auto px-4 bg-white mt-7 rounded-lg shadow-lg flex flex-col px-10 py-8 ">
        <form onSubmit={submitTicket}>
          <input
            value={initInput.title}
            onChange={handleChangeInput}
            type="text"
            name="title"
            placeholder="موضوع"
            className="border-neutral-200 border-2 rounded-md py-2 pr-9 pl-3 mb-5 dark:md:hover:bg-fuchsia-600 placeholder:italic   placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-blue-800 focus:ring-blue-800 focus:ring-1 sm:text-sm"
          />
          <textarea
            value={initInput.message}
            onChange={handleChangeInput}
            className="border-neutral-200 border-2 rounded-md py-2 pr-9 pl-3 mb-10 mt-10 dark:md:hover:bg-fuchsia-600 placeholder:italic   placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-blue-800 focus:ring-blue-800 focus:ring-1 sm:text-sm"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="لطفا متن پیام را بنویسید  ..."
          ></textarea>
          <div className="flex py-2">
            <Button type="fourthary" className="mr-5" onClick={submitTicket}>
              ثبت
            </Button>
            <Button type="tertiary" className="mr-5">
              <Link to="/listTicket">انصراف</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default CreateTicket
