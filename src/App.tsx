import React from "react";
import { compose, createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { useRef } from "react";

type TSomeValue = { data: string };

const initialState: TSomeValue = { data: "" };

const someValueReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "send": {
      return { data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(someValueReducer);

export default function App() {
  const value = useSelector((state: TSomeValue) => state.data);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClickSend = () => {
    dispatch({ type: "send", payload: inputRef.current?.value });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>
        <span>Значение</span>
        <span>{value}</span>
      </div>
      <br />
      <input ref={inputRef} />
      <button children="Отправить" onClick={onClickSend} />
      <button children="Отправить асинхронно" />
    </div>
  );
}
