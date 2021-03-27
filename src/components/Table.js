import React from "react";
import "../styles/Table.css";

function Table({ table }) {
  return (
    <div className="table">
      <table style={{ width: "60%" }}>
        <tr>
          <th colSpan="4">Comparison Table</th>
        </tr>
        <tr>
          <th>Photo</th>
          <th>ID</th>
          <th>URL</th>
          <th>Title</th>
        </tr>
        {table.map((data) => {
          return (
            <tr key={data.id}>
              <td>
                <img
                  style={{ width: "100px" }}
                  src={data.thumbnailUrl}
                  alt=""
                />
              </td>
              <td>{data.id}</td>
              <td>{data.url}</td>
              <td>{data.title}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
