import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getTask, reset} from "../features/tasks/taskSlice"

import Header from '../components/Header'
import Tasks from '../components/Tasks'
import Sidebar from '../components/Sidebar'
import "../App.css"
import Spinner from "../components/Spinner"
import {AiOutlinePlus} from "react-icons/ai"
import Navbar from "../components/Navbar"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const {user} = useSelector((state) => state.auth)
  const {tasks, isLoading, isError, message} = useSelector((state) => state.tasks)

  useEffect(() => {
    if(isError){
      console.log(message)
    }
    if(!user){
      navigate("/login")
    }
    if(user){
      dispatch(getTask())
    }
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading){
    return <Spinner/>
  }
  return (
    <main>
      <Header></Header>
      <Navbar toggle={toggle}></Navbar>
        <div className=' max-w-[1600px] px-5 flex flex-wrap justify-between items-start mt-10 py-2'>
            <Tasks task={tasks}></Tasks>
            <Sidebar></Sidebar>
        </div>
        <div className="fixed bottom-10 right-10 bg-[#7FCD91] w-[50px] h-[50px] rounded-full flex items-center justify-center">
          <AiOutlinePlus size={30} cursor="pointer" onClick={() => setToggle(!toggle)}/>
        </div>
    </main>
  )
}

export default Dashboard