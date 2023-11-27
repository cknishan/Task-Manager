import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            required: true,
        },
        deadline: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Task', bookSchema);