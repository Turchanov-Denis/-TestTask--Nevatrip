import ListItem from './component/ListItem';
import './css/style.css'
import { useState } from "react"



function App() {
  const [items, setItems] = useState()
  const [historyOrders, setHistoryOrders] = useState({})
  const [listHistoryOrders, setListHistoryOrders] = useState([])
  function getList() {
    // const listItems = document.querySelector(".list-item");
    console.log(historyOrders);
    (Number(historyOrders.amount) !== 0) && setListHistoryOrders(prev => [...prev, historyOrders])


  }
  function timeArrive(string) {
    let date = new Date()
    date.setHours(Number(string.slice(0, 2)))
    date.setMinutes(Number(string.slice(3, 5)))
    date.setTime(date.getTime() + 60 * 40 * 1000)
    // date.setTime(Date.parse(string) + 60*40)


    return (date.getHours() < 9 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 9 ? "0" + date.getMinutes() : date.getMinutes())
  }
  return (
    <div>
      <section className='ticket'>
        <ListItem historyOrders={historyOrders} setHistoryOrders={setHistoryOrders}></ListItem>
        <button style={{
          "width": "100px",
          "height": "40px"
        }} onClick={() => getList()}>Check out</button>
      </section>

      <section className='historyOrders'>
        {listHistoryOrders.map(item => (item.route !== "из A в B и обратно в А") ? <div style={{
          "marginTop": "30px"
        }}>Вы выбрали {item.amount} билета по маршруту из {item.route} стоимостью {Number(item.amount) * 400}р. <br></br> Это путешествие займет у вас 40 минут. <br></br>Теплоход отправляется в {(item.route == "из A в B" ? item.timeTo : item.timeFrom)}, а прибудет в {timeArrive((item.route == "из A в B" ? item.timeTo : item.timeFrom))}</div> : <div style={{
          "marginTop": "30px"
        }}>Вы выбрали {item.amount} билета по маршруту из {item.route} стоимостью {Number(item.amount) * 400}р. <br></br>Теплоход отправляется в {item.timeTo}, а прибудет в {timeArrive(item.timeTo)}<br></br>Обратный путь: теплоход отправляется в {item.timeFrom}, а прибудет в {timeArrive(item.timeFrom)}</div>)}
      </section>
    </div>
  );
}

export default App;
