import axios from "axios";
import { toast } from "react-toastify";

const API_URL = 'http://localhost:5000/api';

export const getStudentList = async () => {
    try {
        const res = await axios.get(`${API_URL}/students`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export const addStudent = async (data) => {
    try {
        await axios.post(`${API_URL}/student`, data);
    } catch (error) {
        console.log(error)
    }
}


export const updateStudent = async (data, id) => {
    try {
        const res =await axios.put(`${API_URL}/student/${id}`, data);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}


export const deleteStudent = async (id) => {
    try {
        await axios.delete(`${API_URL}/student/${id}`);
    } catch (error) {
        console.log(error)
        throw error;
    }
}