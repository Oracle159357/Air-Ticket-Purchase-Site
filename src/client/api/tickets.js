export const getAllTicket = async () => {
  const response = await fetch('/tickets');
  return response.json();
};