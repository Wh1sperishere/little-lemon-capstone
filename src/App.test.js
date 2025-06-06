import { render, screen } from "@testing-library/react";
import Reservations from './Pages/Reservations';

test('Renders the BookingForm heading', () => {
    render(<Reservations />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})