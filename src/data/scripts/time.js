function updateClock() {
  const now = new Date();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const weekday = days[now.getDay()];
  const month = months[now.getMonth()];
  const day = now.getDate();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedDate = `${weekday} ${month} ${day}, ${hours}:${minutes} ${ampm}`;

  const timeDisplay = document.querySelector('.time');
  if (timeDisplay) {
    timeDisplay.textContent = formattedDate;
  }
}

updateClock();

setInterval(updateClock, 60000);
