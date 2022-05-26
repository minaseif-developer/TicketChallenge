import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../../microComponent/button'
import { read, store } from '../../provider/storage'
import { v4 as uuidv4 } from 'uuid'

const DetailsTicket = () => {
  const params = useParams()
  const history = useNavigate()
  const { id } = params
  const [detailsTicket, setDetailsTicket] = useState({})
  const [answerTicket, setAnswerTicket] = useState('')

  useEffect(() => {
    const listTickets = read('ticketList')
    const ticket = listTickets.find((ticket) => ticket.id === id)
    setDetailsTicket(ticket)
  }, [])

  const handleChangeAnswers = (e) => {
    const value = e.target.value
    setAnswerTicket(value)
  }

  const handleSendMessage = () => {
    const model = {
      id: uuidv4,
      message: answerTicket,
    }
    const listTickets = read('ticketList')
    const ticket = listTickets.find((ticket) => ticket.id === id)
    ticket?.answered.push(model)
    ticket.status = 'answered'
    setDetailsTicket(ticket)
    store('ticketList', [...listTickets])
    setAnswerTicket('')
  }

  const handleClosedMessage = () => {
    const listTickets = read('ticketList')
    const ticket = listTickets.find((ticket) => ticket.id === id)
    ticket.status = 'closed'
    ticket.closed = true
    store('ticketList', [...listTickets])
    history('/listTicket')
  }

  return (
    <div>
      <div className="bg-teal-500 rounded-bl-full shadow-md flex w-96 h-14 justify-center items-center">
        <h3 className="text-1xl font-bold text-blue-50 ">جزییات پیام </h3>
      </div>
      <div className="container mx-auto px-4 bg-white mt-7 rounded-lg shadow-lg flex flex-col  px-10 py-8">
        <h5 className="font-bold text-xl text-blue-900 text-right">
          {detailsTicket?.title}
        </h5>
        <p className="text-gray-600 text-base mt-5 mb-4 text-right">
          {detailsTicket?.message}
        </p>

        {detailsTicket?.answered?.map((item) => (
          <p className="text-blue-700 text-base font-bold mt-5 mb-4 mr-5 text-right">
            متن پاسخ: {item.message}
          </p>
        ))}

        {!detailsTicket?.closed && (
          <textarea
            value={answerTicket}
            className="border-neutral-200 border-2 rounded-md py-2 pr-9 pl-3 mb-10 mt-10 dark:md:hover:bg-fuchsia-600 placeholder:italic   placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-blue-800 focus:ring-blue-800 focus:ring-1 sm:text-sm"
            name="message"
            onChange={handleChangeAnswers}
            cols="30"
            rows="10"
            placeholder="لطفا متن پیام را بنویسید  ..."
          ></textarea>
        )}
        {!detailsTicket?.closed && (
          <div>
            <Button
              className=" ml-5"
              type="tertiary"
              onClick={handleClosedMessage}
            >
              بستن تیکت
            </Button>
            <Button type="secondary" onClick={handleSendMessage}>
              ارسال پاسخ
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
export default DetailsTicket
