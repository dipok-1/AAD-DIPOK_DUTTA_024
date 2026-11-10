import { studentModal } from "../models/student.js";

export const addStudent = async (req, res) => {
    try {
        const student = new studentModal(req.body);
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
        const updatedStudentList = await studentModal.findByIdAndUpdate({_id: id}, req.body);
        res.status(200).json({success: true, data: updatedStudentList }, {new: true});
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