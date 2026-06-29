function formatDate(date: string) {
  const parsedDate = new Date(date);

  return {
    date: parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: parsedDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}

export default formatDate;
