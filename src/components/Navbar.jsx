
export function Navbar() {
    return (
        <nav style={{display:"flex", justifyContent: "space-between", padding: 10, backgroundColor: "blue", color: "white"}}>
            <h2>React</h2>
            <ul style={{display:"flex", gap: 30, listStyle:"none"}}>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}