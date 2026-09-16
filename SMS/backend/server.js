import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { addStudent, getStudent } from './controller/studentController.js';

const app = express();
await connectDB();
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Student Management System API is running")
})

app.use('/api/student', addStudent);
app.use('/api/students', getStudent);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})