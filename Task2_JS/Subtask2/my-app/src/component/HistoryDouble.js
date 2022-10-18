export default function HistoryDefault({item,timeArrive}) {

    return (
        <div style={{
            "marginTop": "30px"
          }}>Вы выбрали {item.amount} билета по маршруту из {item.route} стоимостью {Number(item.amount) * 400}р. <br></br>Теплоход отправляется в {item.timeTo}, а прибудет в {timeArrive(item.timeTo)}<br></br>Обратный путь: теплоход отправляется в {item.timeFrom}, а прибудет в {timeArrive(item.timeFrom)}</div>
    )
}