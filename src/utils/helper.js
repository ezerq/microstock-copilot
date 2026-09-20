function toTitleCase(text) {
  return text
    .split(" ")
    .map((t) => t[0].toUpperCase() + t.slice(1))
    .join(" ");
}

export { toTitleCase };
