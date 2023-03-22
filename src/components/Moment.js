import moment from "moment";
import React, { useState } from "react";

export const Moment = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const formatNames = [
    "MMMM Do YYYY",
    "DD-MMM-YYYY",
    "YY/MM/DD",
    "MM-DD-YYYY",
    "dddd, MMMM Do YYYY",
  ];

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const formattedDates = formatNames.map((format) =>
      moment(selectedDate).format(format)
    );
    setSelectedDate(formattedDates);
  };

  return (
    <div>
      <h1 style={{ marginTop: "100px" }}>Moment.js library functions</h1>
      <label>
        <span style={{ fontSize: "20px", fontWeight: "600" }}>
          Select a date:
        </span>

        <input
          type="date"
          style={{
            height: "30px",
            width: "200px",
            fontSize: "20px",
            margin: "20px",
          }}
          onChange={handleDateChange}
        />
      </label>
      {selectedDate && (
        <div style={{ fontSize: "15px" }}>
          {selectedDate.map((date, index) => (
            <p key={index}>
              {formatNames[index]} ----- {date}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
<table>
  <tr>
    <th>
      <tr></tr>
    </th>
  </tr>
</table>;
