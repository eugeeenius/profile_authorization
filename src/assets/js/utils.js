export function dateToString(date, divider = '.', reverse = false) {
  if (!date || !(date instanceof Date)) {
    console.log('[dateToString] Wrong date, ', date);
    return '';
  }

  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month.toString().length < 2) {
    month = '0' + month;
  }
  if (day.toString().length < 2) {
    day = '0' + day;
  }
  return reverse
    ? year + divider + month + divider + day
    : day + divider + month + divider + year;
}
