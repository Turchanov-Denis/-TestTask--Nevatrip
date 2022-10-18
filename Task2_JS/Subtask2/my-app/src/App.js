import ListItem from './component/ListItem';
import './css/style.css'
import { useState } from "react"
import HistoryDefault from './component/HistoryDefault';
import HistoryDouble from './component/HistoryDouble';


function App() {
  const [items, setItems] = useState()
  const [historyOrders, setHistoryOrders] = useState({})
  const [listHistoryOrders, setListHistoryOrders] = useState([])
  function getList() {
    // const listItems = document.querySelector(".list-item");
    console.log(historyOrders);
    (Number(historyOrders.amount) > 0) && setListHistoryOrders(prev => [...prev, historyOrders])


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
        {listHistoryOrders.map(item => (item.route !== "из A в B и обратно в А") ? <HistoryDefault item = {item} timeArrive={timeArrive}></HistoryDefault> : <HistoryDouble item = {item} timeArrive={timeArrive}></HistoryDouble>)}
      </section>
    </div>
  );
}

export default App;
