export function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="mb-4">
            <input 
                type="text" 
                aria-label="Search students by name or roll number"
                placeholder="Search by name or roll number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md border border-[#303030] bg-[#0d0d0d] px-4 py-2.5 font-mono text-xs text-[#ddd] outline-none placeholder:text-[#666] focus:border-[#a88932]"
            />
        </div>
    )
}