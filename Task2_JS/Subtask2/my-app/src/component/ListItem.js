import { useEffect, useState } from "react"


export default function ListItem({ historyOrders, setHistoryOrders }) {
    const sheduleTo = ["18:00", "18:30", "18:45", "19:00", "19:15", "21:00",]
    const sheduleFrom = ["15:30", "18:30", "18:45", "19:00", "19:15", "21:50", "21:50"]
    const [route, setRoute] = useState("из A в B")
    const [timeTo, setTimeTo] = useState(sheduleTo[0])
    const [timeFrom, setTimeFrom] = useState(sheduleFrom.filter(item => item > timeTo)[0])
    const [amount, setAmount] = useState(1)


    useEffect(() => {
        setHistoryOrders({ route, timeTo, timeFrom, amount })
        console.log(historyOrders)
    }, [amount, route, timeTo, timeFrom])
    return (
        <div className="ticket__item">
            <select name="route" id="route" onChange={e => setRoute(e.target.value)}>
                <option value="из A в B">из A в B</option>
                <option value="из B в A">из B в A</option>
                <option value="из A в B и обратно в А">из A в B и обратно в А</option>
            </select>

            <label style={{
                "marginLeft": "10px"
            }} >Выберите время</label>
            {((route === "из A в B") || route === "из A в B и обратно в А") ? <select name="time" id="time" onChange={e => setTimeTo(e.target.value)}>
                {sheduleTo.map(item => <option value={item}>{item}(из A в B)</option>)}
            </select> : (route === "из B в A") && <select name="time" id="time" onChange={e => setTimeFrom(e.target.value)} >
                {sheduleFrom.map(item => <option value={item}>{item}(из B в A)</option>)}
            </select>}


            {(route === "из A в B и обратно в А") && <><label style={{
                "marginLeft": "10px"
            }} >Выберите обратное время</label>
                <select name="time" id="time" onChange={e => setTimeTo(e.target.value)}>
                    {sheduleFrom.filter(item => item > timeTo).map(item => <option value={item}>{item}(из B в A)</option>)}
                </select>
            </>}
            {(route && (timeTo || timeFrom)) && <><label style={{
                "marginLeft": "10px"
            }}>Количество</label> <input value={amount} type="number" onChange={e => { setAmount((e.target.value)) }}></input></>}
        </div>

    )
}