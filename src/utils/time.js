export function estimatedTimeElapsed(date = new Date()) {
  let dateNow = new Date();
  if (date > dateNow) date = dateNow;

  let years = Math.floor((dateNow - date) / (365 * 24 * 60 * 60 * 1000));
  if (years > 0) return years + "y";
  let days = Math.floor((dateNow - date) / (24 * 60 * 60 * 1000));
  if (days > 0) return days + "d";
  let hours = Math.floor((dateNow - date) / (60 * 60 * 1000));
  if (hours > 0) return hours + "h";
  let minutes = Math.floor((dateNow - date) / (60 * 1000));
  if (minutes > 0) return minutes + "m";
  else return "now";
}
