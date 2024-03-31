
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


  const date = new Date(unix * 1000);
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1;
  // const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  const second = date.getSeconds();

  return `${hour}:${minute}`;

  // return `${year}/${month}/${day} ${hour}:${minute}:${second}`;

}

