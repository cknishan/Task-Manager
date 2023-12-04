
import React from 'react'
import { TaskSingleCard } from './TaskSingleCard';

export const TaskCard = ({ tasks }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {tasks.map(item => (
                <TaskSingleCard key={item._id} task={item} />
            ))}
        </div>
    )
}
