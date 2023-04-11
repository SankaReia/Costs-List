import "./CostForm.css";
import React, { useState } from "react";

function CostForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");
  //  подход нескольких состояний

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   price: "",
  //   date: "",
  // });
  //  подход одного состояния

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   name: event.target.value,
    // });
    //  spret - КОПИРУЕМ ОБЪЕКТ И ПЕРЕПИСЫВАЕМ NAME, чтобы не потерять price & date

    //  если мы хотим обновить состояние зависящее от предыдущего состояния, то лучше писать так:
    //   setUserInput((previousState)=> {
    //     return {
    //       ...previousState,
    //       name: event.target.value
    //     }
    //   })
    //  previous state передаем в качетсве аргумента предыдущее состояние
  };

  const priceChangeHandler = (event) => {
    setInputPrice(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   price: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  function submitHandler(event) {
    event.preventDefault();
    //предотвращает дефолтное поведение btn с типом submit, т.е. обновление страницы при нажатии

    const costData = {
      description: inputName,
      price: inputPrice,
      date: new Date(inputDate),
    };
    //сохранение значений инпутов в объект costData при нажатии на кнопку Add

    setInputName("");
    setInputPrice("");
    setInputDate("");
    //это 2-х стороннее связывание. Нужно чтобы устанавливать новые значения - пустые строки, после отправки формы
    //для этого в инпутах устанавливается значение value

    props.onSaveCostData(costData);
    //Вызов функции для передачи costData по иерархии вверх
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Title</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>

        <div className="new-cost__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputPrice}
            onChange={priceChangeHandler}
          />
        </div>

        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            lang="en_GB"
            min="2020-01-01"
            max="2030-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-cost__actions">
          <button type="submit">Add expense</button>
          <button type="button" onClick={props.onCancel}>
            Cancellation
          </button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
