import { useState } from "react"


export default function ListItem() {

    const [route, setRoute] = useState("")
    const [timeTo,setTimeTo] = useState("")
    const [timeFrom,setTimeFrom] = useState("")
    const sheduleTo = ["18:00","18:30","18:45","19:00","19:15","21:00",]
    const sheduleFrom = ["18:30","18:45","19:00","19:15","21:50","21:50"]


    return (
        <div>
            <select name="route" id="route" onChange={e => setRoute(e.target.value)}>
                <option value="из A в B">из A в B</option>
                <option value="из B в A">из B в A</option>
                <option value="из A в B и обратно в А">из A в B и обратно в А</option>
            </select>

            <label for="time">Выберите время</label>
            {(route === "из A в B") ? <select name="time" id="time">
                <option value="18:00(из A в B)">18:00(из A в B)</option>
                <option value="18:30(из A в B)">18:30(из A в B)</option>
                <option value="18:45(из A в B)">18:45(из A в B)</option>
                <option value="19:00(из A в B)">19:00(из A в B)</option>
                <option value="19:15(из A в B)">19:15(из A в B)</option>
                <option value="21:00(из A в B)">21:00(из A в B)</option>
            </select> :<select name="time" id="time">
            <option value="18:30(из B в A)">18:30(из B в A)</option>
                <option value="18:45(из B в A)">18:45(из B в A)</option>
                <option value="19:00(из B в A)">19:00(из B в A)</option>
                <option value="19:15(из B в A)">19:15(из B в A)</option>
                <option value="19:35(из B в A)">19:35(из B в A)</option>
                <option value="21:50(из B в A)">21:50(из B в A)</option>
                <option value="21:55(из B в A)">21:55(из B в A)</option>
            </select>}
            

            {(route === "из A в B и обратно в А") && <><label for="time">Выберите обратное время</label>
            <select name="time" id="time">
            <option value="18:30(из B в A)">18:30(из B в A)</option>
                <option value="18:45(из B в A)">18:45(из B в A)</option>
                <option value="19:00(из B в A)">19:00(из B в A)</option>
                <option value="19:15(из B в A)">19:15(из B в A)</option>
                <option value="19:35(из B в A)">19:35(из B в A)</option>
                <option value="21:50(из B в A)">21:50(из B в A)</option>
                <option value="21:55(из B в A)">21:55(из B в A)</option>
            </select>
</> }
            

        </div>

    )
}