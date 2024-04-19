export function nowTOHHMM() {
  const d = new Date();
  return `${d.getHours()} : ${d.getMinutes()}`;
}
