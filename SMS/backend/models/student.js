import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollNo: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

export const studentModal = mongoose.model('student', studentSchema);