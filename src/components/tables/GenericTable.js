import React from "react";

function GenericTable(props) {
  const theader = props.header;
  const trows = props.rows;

  return (
    <div>
      <table>
        <thead>
          <tr>
            {theader.map((head, index) => {
              <th key={index}>{head}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {trows.map((datos, index) => {
            <tr key={index}>
              <td>{datos["State"]}</td>
              <td>{datos}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default GenericTable;
