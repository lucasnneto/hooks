import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { model } from "../../mixins/utils";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const input = model(number, setNumber);
  const [fatorial, setFatorial] = useState(1);
  const [oddEven, setOddEven] = useState("Impar");

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);
  // SEM USAR DEPENDENCIAS
  // useEffect(() => {
  //   setOddEven(number % 2 === 0 ? "Par" : "Impar");
  // });
  useEffect(() => {
    setOddEven(number % 2 === 0 ? "Par" : "Impar");
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input type="number" className="input" {...input} />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status:</span>
          <span className="text red">{oddEven}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
