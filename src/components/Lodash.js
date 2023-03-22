import React, { useState } from "react";
import _ from "lodash";

export const Lodash = () => {
  const [inputData, setInputData] = useState({
    name: "",
  });

  const [newdata, setNewData] = useState([]);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  let { name } = inputData;
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewData([...newdata, name]);
    setInputData({ name: "" });
  };

  const value = newdata
    .join(",")
    .split(",")
    .map(function (item) {
      return parseInt(item);
    });

  const filter = `${_.filter(value)}`;
  console.log(filter);

  const sum = `${_.sum(value)}`;
  console.log(sum);

  const max = `${_.max(value)}`;
  console.log(max);

  const doubledNumbers = `${_.map(value, (n) => n * 2)}`;
  console.log(doubledNumbers);

  const chunk = `${JSON.stringify(_.chunk(value, 2))}`;
  console.log(chunk);

  const groupBy = `${JSON.stringify(_.groupBy(value))}`;
  console.log(groupBy);

  return (
    <div>
      <h1>Lodash.js library function</h1>
      <label>
        <span style={{ fontSize: "20px", fontWeight: "600" }}>Add Value :</span>
        <input
          name="name"
          value={inputData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter value like 1,2,... "
          style={{
            height: "30px",
            width: "300px",
            fontSize: "20px",
            margin: "20px",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            height: "30px",
            width: "100px",
            fontSize: "20px",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Submit
        </button>
      </label>
      <div>{newdata.length > 0 && <p>Filter value : {filter}</p>}</div>
      <div>{newdata.length > 0 && <p>Sum : {sum}</p>}</div>
      <div>{newdata.length > 0 && <p>Max value: {max}</p>}</div>
      <div>{newdata.length > 0 && <p>Doble numbers: {doubledNumbers}</p>}</div>
      <div>{newdata.length > 0 && <p>Chunk value : {chunk}</p>}</div>
      <div>
        {newdata.length > 0 && <p>Group value: {Object.values(groupBy)}</p>}
      </div>
    </div>
  );
};
