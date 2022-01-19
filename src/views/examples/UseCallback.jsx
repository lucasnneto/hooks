import React, { useCallback, useState } from "react";
import UseCallbackButtons from "./UseCallbackButtons";
import PageTitle from "../../components/layout/PageTitle";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  const inc = useCallback(
    (delta) => {
      setCount((curr) => curr + delta);
    },
    [setCount]
  );

  // function inc(delta) {
  //   setCount(count + delta);
  // }
  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
