import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/tasks')
            .then((response) => {
                setTasks(response.data.data);
                // console.log(tasks)
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                console.log(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className='text-3xl my-8'>Your Tasks</h1>
                <Link to='/tasks/create'>
                    <MdOutlineAddBox className="text-sky-800 text-4xl"></MdOutlineAddBox>
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <table className="w-full border-separate border-spacing-2">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 rounded-md">No</th>
                                <th className="border border-slate-600 rounded-md">Name</th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">Tag</th>
                                <th className="border border-slate-600 rounded-md">
                                    Deadline
                                </th>
                                <th className="border border-slate-600 rounded-md">Priority</th>
                                <th className="border border-slate-600 rounded-md">Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={task._id} className='h-8'>
                                    <td className="border border-slate-600 rounded-md">{index + 1}</td>
                                    <td className="border border-slate-600 rounded-md">{task.name}</td>
                                    <td className="border border-slate-600 rounded-md max-md:hidden">{task.tag}</td>
                                    <td className="border border-slate-600 rounded-md">
                                        {task.deadline}
                                    </td>
                                    <td className="border border-slate-600 rounded-md">{task.priority}</td>
                                    <td className="border border-slate-600 rounded-md">
                                        <div className="flex justify-center gap-x-4">
                                            <Link to={`/tasks/details/${task._id}`}>
                                                <BsInfoCircle className='text-2xl text-green-800' />
                                            </Link>
                                            <Link to={`/tasks/edit/${task._id}`}>
                                                <AiOutlineEdit className='text-2xl text-yellow-500' />
                                            </Link>
                                            <Link to={`/tasks/delete/${task._id}`}>
                                                <MdOutlineDelete className='text-2xl text-red-500' />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )
            }
        </div >
    );
};

export default Home;