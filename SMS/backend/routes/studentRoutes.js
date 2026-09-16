import express from 'express';
import { addStudent, getStudent } from '../controller/studentController';
const studentRouter = express.Router();

studentRouter.post('/', addStudent)
studentRouter.get('/', getStudent)