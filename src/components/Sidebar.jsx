import React, { useState } from 'react'
import Form from './Form'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

const Sidebar = () => {
    const [value, onChange] = useState(new Date())
  return (
    <div className='md:w-[400px] mx-auto'>
        <Form></Form>
        {/* <Calendar value={value} className="text-[#fff] bg-[#3F3F44] mx-auto md:w-[500px]"></Calendar> */}
    </div>
  )
}

export default Sidebar