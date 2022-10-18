

export default function HistoryDefault({item,timeArrive}) {
    return (
        <div style={{
            "marginTop": "30px"
        }}>Вы выбрали {item.amount} билета по маршруту из {item.route} стоимостью {Number(item.amount) * 400}р. <br></br> Это путешествие займет у вас 40 минут. <br></br>Теплоход отправляется в {(item.route == "из A в B" ? item.timeTo : item.timeFrom)}, а прибудет в {timeArrive((item.route == "из A в B" ? item.timeTo : item.timeFrom))}</div>
    )
}