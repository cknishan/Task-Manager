import { Link } from 'react-router-dom';
import { LuListTodo } from "react-icons/lu";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDelete } from 'react-icons/md';
import { FaTag } from "react-icons/fa";
import React from 'react'

export const TaskCard = ({ tasks }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {tasks.map(item => (
                <div
                    key={item._id}
                    className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
                    <h2 className="absolute top-1 right-2 mt-2 px-4 py-1 bg-red-300 rounded-lg">
                        {item.priority}
                    </h2>
                    <h4 className="my-2 text-gray-500">{item._id}</h4>

                    <div className="flex justify-start items-center gap-x-2">
                        <LuListTodo className="text-red-300 text-2xl" />
                        <h2 className="my-1">{item.name}</h2>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <FaTag className='text-red-300 text-2xl' />
                        <h2 className="my-1">{item.tag}</h2>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <IoTimeOutline className='text-red-300 text-2xl' />
                        <h2 className="my-1 font-bold text-red-300 ">{item.deadline}</h2>
                    </div>
                    <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                        <Link to={`/tasks/details/${item._id}`}>
                            <BsInfoCircle className='text-2xl text-green-800 hover:text-black'></BsInfoCircle>
                        </Link>
                        <Link to={`/tasks/edit/${item._id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                        </Link>
                        <Link to={`/tasks/delete/${item._id}`}>
                            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
