import { toast } from "react-toastify";
import { addStudent } from "../utils/api";
import { useState } from "react";

export function StudentForm() {
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState(0);
    const [email, setEmail] = useState("");

    function clearInput() {
        setName("");
        setCourse("");
        setRollNo("")
        setYear(0);
        setEmail("")
    }

    async function handleCreateStudent() {
        const payLoad = {
            name,
            rollNo,
            course,
            year,
            email
        }
        await addStudent(payLoad);
        console.log("successfully added student")
        toast.success('sucessfully added student');
    }

    return (
        <main className="w-[70%] bg-[#090909] p-8">

            <div className="mb-7">
                <div className="mb-2 flex items-center gap-2 font-mono text-[11px] text-[#555]">
                    <span>dashboard</span>
                    <span>/</span>
                    <span className="text-[#a88932]">
                        students
                    </span>
                    <span>/</span>
                    <span className="text-[#555]">
                        create
                    </span>
                </div>

                <h2 className="font-mono text-xl font-semibold tracking-tight text-[#e5e5e5]">
                    Add Student
                </h2>

                <p className="mt-2 font-mono text-xs text-[#666]">
                    Enter the student's information below.
                </p>
            </div>


            <form className="border border-[#303030] bg-[#0d0d0d]">

                <div className="border-b border-[#303030] bg-[#111111] px-5 py-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#777]">
                        Student Information
                    </span>
                </div>


                <div className="grid grid-cols-[160px_1fr] border-b border-[#292929]">

                    <label className="border-r border-[#292929] px-5 py-4 font-mono text-xs text-[#888]">
                        Name
                    </label>

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter name"
                        className="
                            w-full
                            bg-transparent
                            px-5
                            py-4
                            font-mono
                            text-xs
                            text-[#ddd]
                            outline-none
                            placeholder:text-[#444]
                            focus:bg-[#111]
                        "
                    />

                </div>



                <div className="grid grid-cols-[160px_1fr] border-b border-[#292929]">

                    <label className="border-r border-[#292929] px-5 py-4 font-mono text-xs text-[#888]">
                        Roll No.
                    </label>

                    <input
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                        type="text"
                        placeholder="Enter roll number"
                        className="
                            w-full
                            bg-transparent
                            px-5
                            py-4
                            font-mono
                            text-xs
                            text-[#ddd]
                            outline-none
                            placeholder:text-[#444]
                            focus:bg-[#111]
                        "
                    />

                </div>


                <div className="grid grid-cols-[160px_1fr] border-b border-[#292929]">

                    <label className="border-r border-[#292929] px-5 py-4 font-mono text-xs text-[#888]">
                        Course
                    </label>

                    <input
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        type="text"
                        placeholder="Enter course"
                        className="
                            w-full
                            bg-transparent
                            px-5
                            py-4
                            font-mono
                            text-xs
                            text-[#ddd]
                            outline-none
                            placeholder:text-[#444]
                            focus:bg-[#111]
                        "
                    />

                </div>


                <div className="grid grid-cols-[160px_1fr] border-b border-[#292929]">

                    <label className="border-r border-[#292929] px-5 py-4 font-mono text-xs text-[#888]">
                        Year
                    </label>

                    <input
                        value={year}
                        onChange={(e) => setYear(parseInt(e.target.value))}
                        type="number"
                        placeholder="Enter year"
                        className="
                            w-full
                            bg-transparent
                            px-5
                            py-4
                            font-mono
                            text-xs
                            text-[#ddd]
                            outline-none
                            placeholder:text-[#444]
                            focus:bg-[#111]
                        "
                    />

                </div>


                <div className="grid grid-cols-[160px_1fr] border-b border-[#292929]">

                    <label className="border-r border-[#292929] px-5 py-4 font-mono text-xs text-[#888]">
                        Email
                    </label>

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                        className="
                            w-full
                            bg-transparent
                            px-5
                            py-4
                            font-mono
                            text-xs
                            text-[#ddd]
                            outline-none
                            placeholder:text-[#444]
                            focus:bg-[#111]
                        "
                    />

                </div>


                <div className="flex items-center justify-end gap-3 bg-[#0b0b0b] px-5 py-4">

                    <button
                        onClick={clearInput}
                        type="button"
                        className="
                            border
                            border-[#292929]
                            px-4
                            py-2
                            font-mono
                            text-[11px]
                            text-[#777]
                            transition
                            hover:border-[#444]
                            hover:text-[#aaa]
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleCreateStudent}
                        type="button"
                        className="
                            border
                            border-[#665522]
                            bg-[#17140b]
                            px-4
                            py-2
                            font-mono
                            text-[11px]
                            text-[#c6a43a]
                            transition
                            hover:border-[#8a7028]
                            hover:bg-[#1d190d]
                        "
                    >
                        Create Student
                    </button>

                </div>

            </form>

        </main>
    );
}

