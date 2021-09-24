import { useEffect, useState } from 'react';
import './App.css';
import Food from './component/All food/Food';
import Header from './component/Header/Header';

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);
  console.log(foods)
  return (
    <div className="App">
      <Header></Header>
      <Food foods={foods}></Food>
    </div>
  );
}

export default App;
