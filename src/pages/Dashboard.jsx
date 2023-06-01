import {useNavigate} from "react-router-dom"
import { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getTask, reset} from "../features/tasks/taskSlice"

import Header from '../components/Header'
import Tasks from '../components/Tasks'
import Sidebar from '../components/Sidebar'
import "../App.css"
import Spinner from "../components/Spinner"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const {tasks, isLoading, isError, message} = useSelector((state) => state.tasks)

  useEffect(() => {
    if(isError){
      console.log(isError)
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
        <div className=' max-w-[1600px] px-5 flex flex-wrap justify-between items-start mt-10 py-2'>
            <Tasks task={tasks}></Tasks>
            <Sidebar></Sidebar>
        </div>
    </main>
  )
}

export default Dashboard