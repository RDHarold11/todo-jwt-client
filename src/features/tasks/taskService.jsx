import axios from "axios";

const API_URL = "https://todoapi-pk3v.onrender.com/api/tasks/"
/* const API_URL = "http://localhost:5000/api/tasks/" */

const createTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, taskData, config)
    return response.data
}

const getTask = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const updateTask = async (id, data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + id, data, config)
    return response.data
}

const deleteTask = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)
    return response.data
}

const tasksService = {
    getTask,
    createTask,
    updateTask,
    deleteTask
}

export default tasksService