import express from 'express';
import { addStudent, getStudent, updateStudent, deleteStudent } from '../controller/studentController.js';
export const studentRouter = express.Router();

studentRouter.post('/student', addStudent)
studentRouter.get('/students', getStudent)
studentRouter.put('/student/:id', updateStudent)
studentRouter.delete('/student/:id', deleteStudent)