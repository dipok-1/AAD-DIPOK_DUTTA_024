import { studentModal } from "../models/student.js";

export const addStudent = async (req, res) => {
    try {
        const {name, rollNo, course, year, email} = req.body;
        if (!name || !rollNo || !course || !year || !email) {
            return res.status(400).json({message: "All fields are required."});
        }
        const student = new studentModal({name, rollNo, course, year, email});
        const savedStudent = await student.save();
        res.status(200).json({ success: true, data: savedStudent})
    } catch (error) {
        res.status(500).json({ error: true, message: "Failed to add student"})
    }
}

export const getStudent = async (req, res) => {
    try {
        const studentList = await studentModal.find();
        res.status(200).json({success: true, data: studentList});
    } catch (error) {
        res.status(500).json({error: true, message: "Failed to fetch students list."})
    }
}


export const updateStudent = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, rollNo, course, year, email} = req.body;
        const updatedStudentList = await studentModal.findByIdAndUpdate({_id: id}, {name, rollNo, course, year, email}, {new: true});
        res.status(200).json({success: true, data: updatedStudentList });
    } catch (error) {
        res.status(500).json({error: true, message: "Failed to update student list."})
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params;
        await studentModal.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Student deleted successfully."})
    } catch (error) {
        res.status(500).json({error: true, message: "Failed to Delete Student."})
    }
}