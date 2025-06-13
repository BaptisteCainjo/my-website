export default function formattedDate(date: string) {
  const isComingSoon = date.split("-").map(Number).length === 2;
  if (isComingSoon) {
    const [month, year] = date.split("-").map(Number);
    const dateObj = new Date(year, month - 1);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
    };

    return dateObj.toLocaleDateString("fr-FR", options);
  }

  const [day, month, year] = date.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return dateObj.toLocaleDateString("fr-FR", options);
}
