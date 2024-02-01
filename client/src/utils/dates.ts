/**
 * Generates a date string in the format yyyy-mm-dd
 * @returns yyyy-mm-dd date string
 */
export function newDate() {
  const date = new Date();

  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });

  return year + "-" + month + "-" + day;
}
