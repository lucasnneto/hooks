import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store/config";
import { numberAdd2, login } from "../../store/actions";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [number, setNumber] = useState(0);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => login(dispatch, "Maria")}>
            login
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "numberMultiple7" });
            }}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "numberDivide25" });
            }}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "numberParse" });
            }}
          >
            Parse
          </button>
        </div>
        <div>
          <input
            className="input"
            type="text"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "numberAddn", payload: Number(number) });
            }}
          >
            somar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
