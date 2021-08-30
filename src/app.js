import React,{useState} from 'react'
import NavBar from './components/navBar'
import Counters from './components/counters'

function App() {
 
    const initialState = [
      { value: 0, id: 1, name: 'ложка' },
      { value: 4, id: 2, name: 'тарелка' },
      { value: 0, id: 3, name: 'вилка' },
      { value: 4, id: 4, name: 'стартовый набор' },
      { value: 2, id: 5, name: 'ненужные вещи' },]
    const [counters, setCounters] = useState(initialState)
    console.log('counters init', counters)
    const handleDelete = (counterId) => {
      //console.log('handleDelete', counterId)
      const newCounters = counters.filter(counter => counter.id !== counterId)
      setCounters(newCounters)
    }
    const handleReset = () => setCounters(initialState)
    const handleDecrement = (counterId) => {
      const newStateCounters = [...counters]
      const index = newStateCounters.findIndex(i => i.id === counterId)
      newStateCounters[index].value--
      setCounters(newStateCounters)
    }
    const handleIncrement = (counterId) => {
      const newStateCounters = [...counters]
      const index = newStateCounters.findIndex(i => i.id === counterId)
      newStateCounters[index].value++
      setCounters(newStateCounters)
    }
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar 
          totalItems = {counters.reduce((a,c)=>a+c.value, 0)}
        />
        <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
      </main>

    </div>
  );
}

export default App;
