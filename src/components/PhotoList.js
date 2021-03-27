import React, { useState, useEffect } from "react";
import { request } from "../api/request";
import "../styles/PhotoList.css";
import Table from "./Table";

function PhotoList() {
  const [state, setState] = useState([]);
  const [table, setTable] = useState([]);

  useEffect(async () => {
    const result = await request();
    const data = result.slice(0, 12);
    setState([...data]);
    console.log(data);
  }, []);

  function compare(id, e) {
    const [data] = state.slice().filter((val) => val.id === id);
    const x = table.includes(data);
    !x && (e.target.innerText = "Remove") && setTable([...table, data]);
    if (x) {
      let rmTable = table.slice().filter((a) => a.id !== id);
      e.target.innerText = "Compare";
      setTable([...rmTable]);
    }
    console.log(e.target.innerText);
    console.log(data, x);
  }

  return (
    <>
      <div className="grid">
        {state.map((data) => {
          return (
            <div key={data.id} className="item">
              <img src={data.url} className="image" />
              <button className="button" onClick={(e) => compare(data.id, e)}>
                Compare
              </button>
            </div>
          );
        })}
      </div>
      {table[0] && <Table table={table} />}
    </>
  );
}

export default PhotoList;
