import React from "react";

const DateTimeDisplay = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;
  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="date-time-display">
      <h2>Current Date & Time</h2>
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
    </div>
  );
};

export default DateTimeDisplay;
