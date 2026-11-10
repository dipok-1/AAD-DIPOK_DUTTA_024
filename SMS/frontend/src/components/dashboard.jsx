import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteStudent, getStudentList, updateStudent } from "../utils/api";
import { StudentForm } from "./studentForm";

export function DashBoard() {
    const [students, setStudents] = useState([]);
    const [open, setOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState(null);
    const [busyId, setBusyId] = useState(null);

    function handleStudentListSection() {
        setOpen(true);
    }

    useEffect(() => {
        (async () => {
            const studentList = await getStudentList();
            setStudents(studentList.data);
        })()
    }, [])

    function handleStartEdit(student) {
        setEditingId(student._id);
        setEditForm({
            name: student.name,
            rollNo: student.rollNo,
            course: student.course,
            year: student.year,
            email: student.email,
        });
    }

    function handleEditChange(event) {
        const { name, value } = event.target;
        setEditForm((currentForm) => ({ ...currentForm, [name]: value }));
    }

    function handleCancelEdit() {
        setEditingId(null);
        setEditForm(null);
    }

    async function handleSaveEdit(student) {
        const updatedStudent = {
            ...editForm,
            year: Number(editForm.year),
        };

        setBusyId(student._id);
        try {
            const updatedStudentData = await updateStudent(updatedStudent, student._id);
            setStudents((currentStudents) =>
                currentStudents.map((currentStudent) =>
                    currentStudent._id === student._id
                        ? { ...currentStudent, ...updatedStudentData.data }
                        : currentStudent
                )
            );
            handleCancelEdit();
        } finally {
            setBusyId(null);
        }
    }

    async function handleDeleteStudent(student) {
        if (!window.confirm(`Delete ${student.name}? This action cannot be undone.`)) {
            return;
        }

        setBusyId(student._id);
        try {
            await deleteStudent(student._id);
            setStudents((currentStudents) =>
                currentStudents.filter((currentStudent) => currentStudent._id !== student._id)
            );
        } catch (error) {
            toast.error(error?.response?.data?.message || "Unable to delete student. Please try again.");
        } finally {
            setBusyId(null);
        }
    }

    return (
        <div className="min-h-screen w-full bg-[#090909] text-[#d4d4d4]">
            <div className="flex min-h-screen">

                <aside className="w-[30%] border-r border-[#292929] bg-[#0d0d0d]">

                    <div className="border-b border-[#292929] px-6 py-5">
                        <h1 className="font-mono text-sm font-semibold tracking-tight text-[#e5e5e5]">
                            Dashboard
                        </h1>

                        <p className="mt-1 font-mono text-xs text-[#666]">
                            Welcome
                        </p>
                    </div>

                    <nav className="p-3 flex flex-col justify-between gap-5">
                        <a
                            onClick={handleStudentListSection}
                            className="
                                block
                                border
                                border-[#3a3218]
                                bg-[#17150c]
                                px-4
                                py-2.5
                                font-mono
                                text-xs
                                text-[#d6ad3a]
                                transition
                                hover:border-[#5a4a20]
                                hover:bg-[#1c190e]
                            "
                        >
                            <span className="mr-2 text-[#806a2b]">
                                →
                            </span>
                            StudentList
                        </a>
                        <a
                            href=""
                            className="
                                block
                                border
                                border-[#3a3218]
                                bg-[#17150c]
                                px-4
                                py-2.5
                                font-mono
                                text-xs
                                text-[#d6ad3a]
                                transition
                                hover:border-[#5a4a20]
                                hover:bg-[#1c190e]
                            "
                        >
                            <span className="mr-2 text-[#806a2b]">
                                →
                            </span>
                            Add Student
                        </a>
                    </nav>

                </aside>


                {/* Right Content - 70% */}
                {open ? (
                    <main className="w-[70%] bg-[#090909] p-8">

                        {/* Header */}
                        <div className="mb-7">

                            <div className="mb-2 flex items-center gap-2 font-mono text-[11px] text-[#555]">
                                <span>dashboard</span>
                                <span>/</span>
                                <span className="text-[#a88932]">
                                    students
                                </span>
                            </div>

                            <h2 className="font-mono text-xl font-semibold tracking-tight text-[#e5e5e5]">
                                Student List
                            </h2>

                            <p className="mt-2 font-mono text-xs text-[#666]">
                                Registered students in the system.
                            </p>

                        </div>

                        <div className="overflow-hidden border border-[#303030] bg-[#0d0d0d]">

                            <table className="w-full border-collapse text-left font-mono text-xs">

                                {/* Table Header */}
                                <thead>
                                    <tr className="border-b border-[#303030] bg-[#111111]">

                                        <th className="border-r border-[#292929] px-5 py-3 font-medium text-[#8a8a8a]">
                                            NAME
                                        </th>

                                        <th className="border-r border-[#292929] px-5 py-3 font-medium text-[#8a8a8a]">
                                            ROLL NO.
                                        </th>

                                        <th className="border-r border-[#292929] px-5 py-3 font-medium text-[#8a8a8a]">
                                            COURSE
                                        </th>

                                        <th className="border-r border-[#292929] px-5 py-3 font-medium text-[#8a8a8a]">
                                            YEAR
                                        </th>

                                        <th className="px-5 py-3 font-medium text-[#8a8a8a]">
                                            EMAIL
                                        </th>

                                        <th className="px-5 py-3 font-medium text-[#8a8a8a]">
                                            ACTIONS
                                        </th>

                                    </tr>
                                </thead>


                                {/* Table Body */}
                                <tbody>

                                    {students.map((item) => {
                                        const isEditing = editingId === item._id;
                                        const isBusy = busyId === item._id;
                                        const isAnotherRowEditing = editingId !== null && !isEditing;

                                        return (
                                            <tr
                                                key={item._id}
                                                className="
                                            border-b
                                            border-[#222]
                                            transition-colors
                                            hover:bg-[#141414]
                                        "
                                            >

                                                <td className="border-r border-[#222] px-5 py-4 text-[#e5e5e5]">
                                                    {isEditing ? (
                                                        <input
                                                            aria-label="Name"
                                                            name="name"
                                                            required
                                                            value={editForm.name}
                                                            onChange={handleEditChange}
                                                            className="w-full border border-[#3a3218] bg-[#111] px-2 py-1 text-[#ddd] outline-none focus:border-[#a88932]"
                                                        />
                                                    ) : item.name}
                                                </td>

                                                <td className="border-r border-[#222] px-5 py-4 text-[#999]">
                                                    {isEditing ? (
                                                        <input
                                                            aria-label="Roll number"
                                                            name="rollNo"
                                                            required
                                                            value={editForm.rollNo}
                                                            onChange={handleEditChange}
                                                            className="w-full border border-[#3a3218] bg-[#111] px-2 py-1 text-[#ddd] outline-none focus:border-[#a88932]"
                                                        />
                                                    ) : item.rollNo}
                                                </td>

                                                <td className="border-r border-[#222] px-5 py-4">

                                                    {isEditing ? (
                                                        <input
                                                            aria-label="Course"
                                                            name="course"
                                                            required
                                                            value={editForm.course}
                                                            onChange={handleEditChange}
                                                            className="w-full border border-[#3a3218] bg-[#111] px-2 py-1 text-[#c6a43a] outline-none focus:border-[#a88932]"
                                                        />
                                                    ) : (
                                                        <span className="text-[#c6a43a]">{item.course}</span>
                                                    )}

                                                </td>

                                                <td className="border-r border-[#222] px-5 py-4 text-[#999]">
                                                    {isEditing ? (
                                                        <input
                                                            aria-label="Year"
                                                            name="year"
                                                            type="number"
                                                            required
                                                            value={editForm.year}
                                                            onChange={handleEditChange}
                                                            className="w-full border border-[#3a3218] bg-[#111] px-2 py-1 text-[#ddd] outline-none focus:border-[#a88932]"
                                                        />
                                                    ) : item.year}
                                                </td>

                                                <td className="px-5 py-4 text-[#888]">
                                                    {isEditing ? (
                                                        <input
                                                            aria-label="Email"
                                                            name="email"
                                                            type="email"
                                                            required
                                                            value={editForm.email}
                                                            onChange={handleEditChange}
                                                            className="w-full border border-[#3a3218] bg-[#111] px-2 py-1 text-[#ddd] outline-none focus:border-[#a88932]"
                                                        />
                                                    ) : item.email}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                                        {isEditing ? (
                                                            <>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleSaveEdit(item)}
                                                                    disabled={isBusy}
                                                                    className="border border-[#5a4a20] bg-[#17150c] px-2.5 py-1.5 text-[#d6ad3a] transition hover:bg-[#1c190e] disabled:opacity-50"
                                                                >
                                                                    {isBusy ? "Saving..." : "Save"}
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={handleCancelEdit}
                                                                    disabled={isBusy}
                                                                    className="border border-[#383838] px-2.5 py-1.5 text-[#999] transition hover:border-[#555] hover:text-[#ddd] disabled:opacity-50"
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleStartEdit(item)}
                                                                    disabled={isAnotherRowEditing || isBusy}
                                                                    className="border border-[#3a3218] px-2.5 py-1.5 text-[#d6ad3a] transition hover:bg-[#17150c] disabled:cursor-not-allowed disabled:opacity-40"
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleDeleteStudent(item)}
                                                                    disabled={isAnotherRowEditing || isBusy}
                                                                    className="border border-[#482727] px-2.5 py-1.5 text-[#d17b7b] transition hover:bg-[#211313] disabled:cursor-not-allowed disabled:opacity-40"
                                                                >
                                                                    {isBusy ? "Deleting..." : "Delete"}
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>

                                            </tr>
                                        );
                                    })}

                                    {students.length === 0 && (
                                        <tr>
                                            <td colSpan="6" className="px-5 py-8 text-center text-[#666]">
                                                No students found.
                                            </td>
                                        </tr>
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </main>
                ) : (
                    <StudentForm />
                )}
            </div>
        </div>
    );
}
