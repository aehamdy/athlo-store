function formatTitle(...words: string[]) {
  return words
    .join(" ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export default formatTitle;
