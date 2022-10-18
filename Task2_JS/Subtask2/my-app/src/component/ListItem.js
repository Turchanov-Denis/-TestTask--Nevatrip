import { useEffect, useState } from "react"


export default function ListItem({historyOrders,setHistoryOrders}) {
    const sheduleTo = ["18:00", "18:30", "18:45", "19:00", "19:15", "21:00",]
    const sheduleFrom = ["15:30","18:30", "18:45", "19:00", "19:15", "21:50", "21:50"]
    const [route, setRoute] = useState("из A в B")
    const [timeTo, setTimeTo] = useState(sheduleTo[0])
    const [timeFrom, setTimeFrom] = useState(sheduleFrom[0])
    const [amount, setAmount] = useState(0)


    useEffect(()=>{
        setHistoryOrders({route,timeTo,timeFrom,amount})
        console.log(historyOrders)
    },[amount,route,timeTo,timeFrom])
    return (
        <div className="ticket__item">
            <select name="route" id="route" onChange={e => setRoute(e.target.value)}>
                <option value="из A в B">из A в B</option>
                <option value="из B в A">из B в A</option>
                <option value="из A в B и обратно в А">из A в B и обратно в А</option>
            </select>

            <label for="time">Выберите время</label>
            {((route === "из A в B") || route === "из A в B и обратно в А" ) ? <select name="time" id="time" onChange={e => setTimeTo(e.target.value)}>
                {sheduleTo.map(item => <option value={item}>{item}(из A в B)</option>)}
                {/* <option value="18:00(из A в B)">18:00(из A в B)</option>
                <option value="18:30(из A в B)">18:30(из A в B)</option>
                <option value="18:45(из A в B)">18:45(из A в B)</option>
                <option value="19:00(из A в B)">19:00(из A в B)</option>
                <option value="19:15(из A в B)">19:15(из A в B)</option>
                <option value="21:00(из A в B)">21:00(из A в B)</option> */}
            </select> : (route === "из B в A") && <select name="time" id="time" onChange={e => setTimeFrom(e.target.value)} >
            {sheduleFrom.map(item => <option value={item}>{item}(из B в A)</option>)}
                {/* <option value="18:30(из B в A)">18:30(из B в A)</option>
                <option value="18:45(из B в A)">18:45(из B в A)</option>
                <option value="19:00(из B в A)">19:00(из B в A)</option>
                <option value="19:15(из B в A)">19:15(из B в A)</option>
                <option value="19:35(из B в A)">19:35(из B в A)</option>
                <option value="21:50(из B в A)">21:50(из B в A)</option>
                <option value="21:55(из B в A)">21:55(из B в A)</option> */}
            </select>}


            {(route === "из A в B и обратно в А") && <><label for="time">Выберите обратное время</label>
                <select name="time" id="time" onChange={e => setTimeTo(e.target.value)}>
                {sheduleFrom.filter(item => item > timeTo).map(item => <option value={item}>{item}(из B в A)</option>)}
                </select>
            </>}
            {(route && (timeTo || timeFrom)) && <><label>Количество</label> <input type="number" onChange={e => { setAmount((e.target.value)) }}></input></>}
        </div>

    )
}