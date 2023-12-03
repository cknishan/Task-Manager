import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {

    const [name, setName] = useState('')
    const [tag, setTag] = useState('')
    const [deadline, setDeadline] = useState('')
    const [priority, setPriority] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveBook = () => {
        const data = {
            name,
            tag,
            deadline,
            priority
        }
        setLoading(true)
        axios
            .post('http://localhost:5555/tasks', data)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch(error => {
                setLoading(false)
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
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
                    Save
                </button>
            </div>

        </div>
    );
}

export default CreateTask