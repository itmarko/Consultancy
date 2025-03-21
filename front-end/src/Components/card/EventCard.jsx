import React from "react";
import formatDate from "../utils/formatDate"; // Import the formatDate utility

const EventCard = ({ event }) => {
  const formattedDate = formatDate(event.date, "DD/MM/YYYY"); // Format date as DD/MM/YYYY

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>Date: {formattedDate}</p>
    </div>
  );
};

export default EventCard;
