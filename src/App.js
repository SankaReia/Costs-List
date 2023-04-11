import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const initialCosts = [
  {
    id: "1",
    date: new Date(2023, 8, 12),
    description: "MacBook",
    price: 1200,
  },
  {
    id: "2",
    date: new Date(2023, 4, 8),
    description: "Iphone 12",
    price: 700,
  },
];

function App() {
  const [costs, setCosts] = useState(initialCosts);

  function addCostHandler(cost) {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
    //Также передача данных по иерархии вверх
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
