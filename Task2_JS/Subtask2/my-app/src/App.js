import ListItem from './component/ListItem';
import './css/style.css'
import { useState } from "react"
import HistoryDefault from './component/HistoryDefault';
import HistoryDouble from './component/HistoryDouble';


function App() {
  // const [items, setItems] = useState()
  const [historyOrders, setHistoryOrders] = useState({}) // current active order
  const [listHistoryOrders, setListHistoryOrders] = useState([])

  function getList() {
    // return data from current active order
    console.log(historyOrders);
    (Number(historyOrders.amount) > 0) ? setListHistoryOrders(prev => [...prev, historyOrders]) : alert("Неверно указано количество")
  }

  function timeArrive(string) {
    // get a string with time ( hours, minutes) and append 40 min
    let date = new Date()
    date.setHours(Number(string.slice(0, 2)))
    date.setMinutes(Number(string.slice(3, 5)))
    date.setTime(date.getTime() + 60 * 40 * 1000)
    return (date.getHours() < 9 ? "0" + date.getHours() : date.getHours()) + ":" + (date.getMinutes() < 9 ? "0" + date.getMinutes() : date.getMinutes())
  }


  return (
    <div className='wrapper'>
      {/* View order property */}
      <section className='ticket'>
        <ListItem historyOrders={historyOrders} setHistoryOrders={setHistoryOrders}></ListItem>
      </section>
      {/* Check out button */}
      <button style={{
        "width": "100px",
        "height": "40px",
        "marginTop": "30px"
      }} onClick={() => getList()}>Посчитать</button>

      {/* history orders */}
      <section className='historyOrders'>
        {listHistoryOrders.map(item => (item.route !== "из A в B и обратно в A") ? <HistoryDefault item={item} timeArrive={timeArrive}></HistoryDefault> : <HistoryDouble item={item} timeArrive={timeArrive}></HistoryDouble>)}
      </section>
    </div>
  );
}

export default App;
