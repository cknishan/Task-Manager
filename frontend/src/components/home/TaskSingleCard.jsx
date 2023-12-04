import React from 'react'
import { Link } from 'react-router-dom';
import { LuListTodo } from "react-icons/lu";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDelete } from 'react-icons/md';
import { BiShow } from 'react-icons/bi';
import { FaTag } from "react-icons/fa";
import { useState } from 'react';
import TaskModal from './TaskModal';

export const TaskSingleCard = ({ task }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div
            key={task._id}
            className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
            <h2 className="absolute top-1 right-2 mt-2 px-4 py-1 bg-red-300 rounded-lg">
                {task.priority}
            </h2>
            <h4 className="my-2 text-gray-500">{task._id}</h4>

            <div className="flex justify-start items-center gap-x-2">
                <LuListTodo className="text-red-300 text-2xl" />
                <h2 className="my-1">{task.name}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <FaTag className='text-red-300 text-2xl' />
                <h2 className="my-1">{task.tag}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <IoTimeOutline className='text-red-300 text-2xl' />
                <h2 className="my-1 font-bold text-red-300 ">{task.deadline}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <BiShow
                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/tasks/details/${task._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black'></BsInfoCircle>
                </Link>
                <Link to={`/tasks/edit/${task._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/tasks/delete/${task._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>
            </div>
            {showModal && (
                <TaskModal task={task} onClose={() => setShowModal(false)} />
            )}
        </div>
    )
}
