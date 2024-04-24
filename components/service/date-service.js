export function nowTOHHMM() {
  const d = new Date();
  return `${d.getHours()} : ${d.getMinutes().toString().padStart(2, "0")}`;
}

export function nowTODDMM(date) {
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
}

export const DAYS = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
