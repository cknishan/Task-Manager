import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditTask = () => {

    const [name, setName] = useState('')
    const [tag, setTag] = useState('')
    const [deadline, setDeadline] = useState('')
    const [priority, setPriority] = useState('')
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(false)
        axios.get(`http://localhost:5555/tasks/${id}`)
            .then(response => {
                setName(response.data.name)
                setTag(response.data.tag)
                setDeadline(response.data.deadline)
                setPriority(response.data.priority)
            })
            .catch(error => {
                setLoading(false)
                alert('An error happened. Please check console')
                console.log(error)
            })
    }, [])

    const handleEditTask = () => {
        const data = {
            name,
            tag,
            deadline,
            priority
        }
        setLoading(true)
        axios
            .put(`http://localhost:5555/tasks/${id}`, data)
            .then(() => {
                setLoading(false)
                enqueueSnackbar('Task Edited successfully', { variant: 'success' });
                navigate('/')
            })
            .catch(error => {
                setLoading(false)
                enqueueSnackbar('Error', { variant: 'error' });
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Task</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>

                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Tag</label>
                    <input
                        type='text'
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>

                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Deadline</label>
                    <input
                        type='text'
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Priority</label>
                    <input
                        type='text'
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditTask}>
                    Save
                </button>
            </div>

        </div>
    );
}

export default EditTask