export function estimatedTimeElapsed(date) {
  const dateNow = Date.now();
  let _date = new Date(date.toString() + "Z").getTime(); // server time is utc
  if (_date > dateNow) _date = dateNow;

  const years = Math.floor((dateNow - _date) / (365 * 24 * 60 * 60 * 1000));
  if (years > 0) return years + "y";
  const days = Math.floor((dateNow - _date) / (24 * 60 * 60 * 1000));
  if (days > 0) return days + "d";
  const hours = Math.floor((dateNow - _date) / (60 * 60 * 1000));
  if (hours > 0) return hours + "h";
  const minutes = Math.floor((dateNow - _date) / (60 * 1000));
  if (minutes > 0) return minutes + "m";
  else return "now";
}
