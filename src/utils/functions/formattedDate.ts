export default function formattedDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  const formattedDate = new Date(date).toLocaleDateString("fr-FR", options);

  return formattedDate;
}
