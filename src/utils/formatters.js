export function formatMoney(amount) {
  if (isNaN(amount) || amount === null)
    throw new Error('Invalid amount format');

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
}

export function formatDate(date) {
  try {
    const dateParsed = new Date(Date.parse(date));
    const checkIfDateIsValid =
      dateParsed.toISOString() === date &&
      dateParsed.toUTCString() === new Date(date).toUTCString();

    if (checkIfDateIsValid) {
      const dateToFormat = new Date(date);
      const formattedDDMMYYYY = new Intl.DateTimeFormat('pt-BR').format(
        dateToFormat,
      );

      const formattedHours = dateToFormat.getHours();
      const formattedMinutes = dateToFormat.getMinutes();

      const timezoneOffSet = dateToFormat.getTimezoneOffset() / 60;
      if (timezoneOffSet === 0)
        return `${formattedDDMMYYYY} ${formattedHours - 3}:${formattedMinutes}`;
      return `${formattedDDMMYYYY} ${formattedHours}:${formattedMinutes}`;
    } else {
      throw new Error('Invalid date format');
    }
  } catch {
    throw new Error('Invalid date format');
  }
}
