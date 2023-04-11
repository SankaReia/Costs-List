import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";

function NewCost(props) {
  const [formVisible, setFormVisible] = useState(false);

  function saveCostDataHandler(inputCostData) {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    //передача данных по иерархии вверх

    props.onAddCost(costData);
    //Вызов функции для передачи costData по иерархии вверх

    setFormVisible(false);
  }

  const inputCostDataHandler = () => {
    setFormVisible(true);
  };

  const cancelCostHandler = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!formVisible && (
        <button onClick={inputCostDataHandler}>Add new expense</button>
      )}
      {formVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
}

export default NewCost;
