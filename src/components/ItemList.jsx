import { Items } from "../mockdata"
import { Counter } from "./Counter"
export function ItemList() {
    return(
        <section style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h2>Technologies</h2>
        <ul>
            {Items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
         <Counter/>
    </section>
    )
}