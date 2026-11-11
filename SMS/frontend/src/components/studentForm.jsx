import { toast } from "react-toastify";
import { addStudent } from "../utils/api";
import { useState } from "react";

export function StudentForm() {
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");
    const [email, setEmail] = useState("");

    function clearInput() {
        setName("");
        setCourse("");
        setRollNo("");
        setYear("");
        setEmail("");
    }

    async function handleCreateStudent(event) {
        event.preventDefault();

        if (![name, rollNo, course, year, email].every((value) => value.trim())) {
            toast.error("All fields are required.");
            return;
        }

        if (!event.currentTarget.elements.email.checkValidity()) {
            toast.error("Please enter a valid email address.");
            return;
        }

        const numericYear = Number(year);
        if (!Number.isInteger(numericYear) || numericYear <= 0) {
            toast.error("Year must be a positive whole number.");
            return;
        }

        try {
            await addStudent({
                name: name.trim(),
                rollNo: rollNo.trim(),
                course: course.trim(),
                year: numericYear,
                email: email.trim(),
            });
            toast.success("Student added successfully.");
            clearInput();
        } catch (error) {
            toast.error(error?.response?.data?.message || "Unable to add student. Please try again.");
        }
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


            <form noValidate onSubmit={handleCreateStudent} className="border border-[#303030] bg-[#0d0d0d]">

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
                        name="name"
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
                        name="rollNo"
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
                        name="course"
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
                        name="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        type="number"
                        min="1"
                        step="1"
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
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
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
                        type="submit"
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
