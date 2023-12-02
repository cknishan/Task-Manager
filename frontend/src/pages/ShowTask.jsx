import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowTask = () => {
    const [task, setTask] = useState({})
    const [loading, setLoading] = useState({})
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://localhost:5555/tasks/${id}`)
            .then((response) => {
                setTask(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })

    }, [])

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Show Task</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{task._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Name</span>
                        <span>{task.name}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Tag</span>
                        <span>{task.tag}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Deadline</span>
                        <span>{task.deadline}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Priority</span>
                        <span>{task.priority}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowTask