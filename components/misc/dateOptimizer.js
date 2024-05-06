
export const getDayText = (day) => {
  switch (day) {
    case 0:
      return "Sun"
    case 1:
      return "Mon"
    case 2:
      return "Tue"
    case 3:
      return "Wed"
    case 4:
      return "Thu"
    case 5:
      return "Fri"
    case 6:
      return "Sat"
    default:
      return ""
  }
}
export function unixToDate(unix) {

  const utcOffset = -new Date().getTimezoneOffset();
  const localOffsetDifference = 210 - utcOffset;
  const adjustedMilliseconds = unix * 1000 + localOffsetDifference * 60 * 1000;
  const date = new Date(adjustedMilliseconds);

  var hour = date.getHours();
  var minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  // const second = date.getSeconds();

  return `${hour}:${minute}`;

  // return `${year}/${month}/${day} ${hour}:${minute}:${second}`;

}

