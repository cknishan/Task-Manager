import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';


export const TaskTable = ({ tasks }) => {
    return (
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
