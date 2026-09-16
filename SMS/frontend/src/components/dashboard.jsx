import { useEffect } from "react";
import { getStudentList } from "../utils/api";
import { useState } from "react";
import { StudentForm } from "./studentForm";

const data = [
    {
        name: "alex",
        rollNo: "24",
        course: "bca",
        year: "2025",
        email: "alex@gmail.com",
    },
];

export function DashBoard() {
    const [students, setStudents] = useState([]);
    const [open, setOpen] = useState(false);
    function handleStudentListSection() {
        setOpen(true);
    }
    useEffect(() => {
        (async () => {
            const studentList = await getStudentList();
            setStudents(studentList.data);
        })()
    }, [])
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

                                </tr>
                            </thead>


                            {/* Table Body */}
                            <tbody>

                                {students.map((item, index) => (
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
                                            {item.name}
                                        </td>

                                        <td className="border-r border-[#222] px-5 py-4 text-[#999]">
                                            {item.rollNo}
                                        </td>

                                        <td className="border-r border-[#222] px-5 py-4">

                                            <span className="text-[#c6a43a]">
                                                {item.course}
                                            </span>

                                        </td>

                                        <td className="border-r border-[#222] px-5 py-4 text-[#999]">
                                            {item.year}
                                        </td>

                                        <td className="px-5 py-4 text-[#888]">
                                            {item.email}
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </main>
                ): (
                    <StudentForm/>
                )}
            </div>
        </div>
    );
}
