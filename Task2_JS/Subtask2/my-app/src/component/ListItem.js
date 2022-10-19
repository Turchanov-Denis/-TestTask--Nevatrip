import { useEffect, useState } from "react"


export default function ListItem({ historyOrders, setHistoryOrders }) {
    const sheduleTo = ["18:00", "18:30", "18:45", "19:00", "19:15", "21:00",]
    const sheduleFrom = ["15:30", "18:30", "18:45", "19:00", "19:15", "21:50", "21:50"]
    const [route, setRoute] = useState("из A в B")
    const [timeTo, setTimeTo] = useState(sheduleTo[0])
    const [timeFrom, setTimeFrom] = useState(sheduleFrom.filter(item => item > timeTo)[0])
    const [amount, setAmount] = useState(1)
    const routeTrue = (e) => {
        setTimeTo(sheduleTo[0])
        setTimeFrom(sheduleFrom[0])
        console.log("true")
        setRoute(e.target.value)
    }
    const routeFalse = (e) => {
        setTimeTo(sheduleTo[0])
        setTimeFrom(sheduleFrom.filter(item => item > sheduleTo[0])[0])
        console.log("false")

        setRoute(e.target.value)
    }

    useEffect(() => {
        setHistoryOrders({ route, timeTo, timeFrom, amount })
        console.log(historyOrders)
    }, [amount, route, timeTo, timeFrom])

    function setUpRoute(e) {

        e.target.value !== "из A в B и обратно в A" ? routeTrue(e) : routeFalse(e)
       


    }

    function setUpTimeTo(e){
        setTimeTo(e.target.value)
        setTimeFrom(sheduleFrom.filter(item => item > e.target.value)[0])
    }
    return (
        <div className="ticket__item">
            <select name="route" id="route" onChange={e => setUpRoute(e)}>
                <option value="из A в B">из A в B</option>
                <option value="из B в A">из B в A</option>
                <option value="из A в B и обратно в A">из A в B и обратно в А</option>
            </select>

            <label style={{
                "marginLeft": "10px"
            }} >Выберите время</label>
            {((route === "из A в B") || route === "из A в B и обратно в A") ? <select value={timeTo} name="time" id="time" onChange={e => setUpTimeTo(e)
            }>
                {sheduleTo.map(item => <option value={item}>{item}(из A в B)</option>)}
            </select> : (route === "из B в A") && <select value={timeFrom} name="time" id="time" onChange={e => setTimeFrom(e.target.value)} >
                {sheduleFrom.map(item => <option value={item}>{item}(из B в A)</option>)}
            </select>}


            {(route === "из A в B и обратно в A") && <><label style={{
                "marginLeft": "10px"
            }} >Выберите обратное время</label>
                <select value={timeFrom} name="time" id="time" onChange={e => setTimeFrom(e.target.value)}>
                    {sheduleFrom.filter(item => item > timeTo).map(item => <option value={item}>{item}(из B в A)</option>)}
                    
                </select>
            </>}
            {(route && (timeTo || timeFrom)) && <><label style={{
                "marginLeft": "10px"
            }}>Количество</label> <input value={amount} type="number" onChange={e => { setAmount((e.target.value)) }}></input></>}
        </div>

    )
}