import axios from "axios";
import { toast } from "react-toastify";


export const getStudentList = async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/students');
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export const addStudent = async (data) => {
    try {
        await axios.post('http://localhost:5000/api/student', data);
    } catch (error) {
        console.log(error)
    }
}