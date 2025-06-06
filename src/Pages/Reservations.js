import { submitAPI } from "../api";
import { useState } from "react";

function Reservations({ availableTimes, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Family Meet");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { date, time, guests, occasion };

    const success = submitAPI(formData);

    if (success) {
      alert("Reservation submitted!");
      // Optionally reset form fields here
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Book Now</h1>
      <label className="dateSelector">
        Select Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>

      <label className="timeSelector">
        Choose Time:
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className="guestsSelector">
        Number Of Guests:
        <input
          type="number"
          value={guests}
          min="1"
          max="15"
          onChange={(e) => setGuests(parseInt(e.target.value))}
        />
      </label>

      <label className="OccasionSelector">
        Occasion:
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option>Family Meet</option>
          <option>Birthday Party</option>
          <option>Anniversary</option>
          <option>Work Meeting</option>
        </select>
      </label>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default Reservations;
