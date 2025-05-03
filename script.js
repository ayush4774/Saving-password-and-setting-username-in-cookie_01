document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the initial count from the cookie or set it to 0 if it doesn't exist
  let count = getCookie('count');
  if (!count) {
    count = 0; // If count doesn't exist, initialize it to 0
    setCookie('count', count, 7); // Create the cookie with a 7-day expiration
  } else {
    count = parseInt(count);
  }

  // Set the initial count value in the span element
  const countSpan = document.getElementById('count');
  countSpan.textContent = count; // Set the count value in the <span id="count">

  // Increment the count when the button is clicked
  document.querySelector('button').addEventListener('click', function() {
    count++;
    setCookie('count', count, 7); // Update the count cookie
    countSpan.textContent = count; // Update the count in the span element
  });
});