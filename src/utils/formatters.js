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

      return `${formattedDDMMYYYY} ${formattedHours}:${formattedMinutes}`;
    } else {
      throw new Error('Invalid date format');
    }
  } catch {
    throw new Error('Invalid date format');
  }
}

export function formatCPF(cpf) {
  if (cpf.length > 14) return cpf.slice(0, 14);

  cpf = cpf.replace(/\D/g, '');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return cpf;
}

export function formatCreditCard(creditCard) {
  if (creditCard.length > 19) return creditCard.slice(0, 19);

  creditCard = creditCard.replace(/(\d{4})(\d)/, '$1 $2');

  return creditCard;
}

export function formatCardExpiration(cardExpiration) {
  if (cardExpiration.length > 5) return cardExpiration.slice(0, 5);

  if (cardExpiration.length === 3)
    cardExpiration = cardExpiration.replace(/(\d{2})(\d)/, '$1/$2');

  return cardExpiration;
}

export function formatCVV(CVV) {
  if (CVV.length > 3) return CVV.slice(0, 3);

  return CVV;
}
