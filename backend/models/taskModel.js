import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            required: true,
        },
        deadline: {
            type: String,
            required: true,
        },
        priority: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Task = mongoose.model('Task', taskSchema);