import { useState } from "react";

function Reservations() {
  const [state, setState] = useState(true);

  return (
    <form>
      <label className="dateSelector">
        Select Date:
        <input type="date" />
      </label>
      <label className="timeSelector">
        Choose Time:
        <select>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </label>
      <label className="guestsSelector">
        Number Of Guests:
        <input type="number" placeholder="1" min="1" max="15" />
      </label>
      <label className="OccasionSelector">
        Occasion:
        <select>
            <option>Family Meet</option>
            <option>Birthday Party</option>
            <option>Anniversary</option>
            <option>Work Meeting</option>
        </select>
      </label>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default Reservations;
