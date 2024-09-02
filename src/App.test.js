import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/sections/reservePages/BookingForm';

test('renders the booking form', () => {
  render(<BookingForm />);
  
  // Check if all form fields are rendered
  const fields = [
    'First Name', 
    'Last Name', 
    'Email', 
    'Phone Number', 
    'Number of People', 
    'Select Date', 
    'Select Time', 
    'Occasion', 
    'Seating preferences', 
    'Additional Comments'
  ];
  
  fields.forEach((label) => {
    expect(screen.getByLabelText(new RegExp(label, 'i'))).toBeInTheDocument();
  });

  // Check if the "Book Table" button is rendered
  const buttonElement = screen.getByText(/Book Table/i);
  expect(buttonElement).toBeInTheDocument();
});

test('submits the reservation form with valid data', () => {
  render(<BookingForm />);

  // Fill in the form fields with valid data
  fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '123-456-7890' } });
  fireEvent.change(screen.getByLabelText(/Number of People/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: '2024-12-01' } });
  fireEvent.change(screen.getByLabelText(/Select Time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
  fireEvent.change(screen.getByLabelText(/Seating preferences/i), { target: { value: 'Indoors' } });
  fireEvent.change(screen.getByLabelText(/Additional Comments/i), { target: { value: 'Looking forward to it!' } });

  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /Book Table/i }));

  // Assuming your form shows a success message upon submission,
  // you need to replace this with the actual message that appears after a successful submission
  const successMessage = screen.queryByText(/Reservation successful!/i); // Adjust this to match your actual success message
  expect(successMessage).toBeInTheDocument();
});