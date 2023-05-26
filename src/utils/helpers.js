// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
// Rating star
export const ratingStar = (rating) => {
  const stars = [];
  const roundedRating = Math.round(rating / 2);
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push('full');
    } else if (i - 0.5 === rating) {
      stars.push('half');
    } else {
      stars.push('none');
    }
  }
  return stars;
};
// Truncate text
export const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text;
  }
  const lastSpace = text.lastIndexOf(' ', limit);
  const textTruncate = text.substring(0, lastSpace) + '...';
  return textTruncate;
};
