function updateTime() {
  let london = document.querySelector("#london");
  if (london) {
    let londonDateElement = london.querySelector(".date");
    let londonTimeElement = london.querySelector(".time");
    let londonTimezone = "Europe/London";

    londonDateElement.innerHTML = moment()
      .tz(londonTimezone)
      .format("MMMM Do YYYY");
    londonTimeElement.innerHTML = moment()
      .tz(londonTimezone)
      .format("h:mm:ss [<small>] A[</small>]");
  }

  let newYork = document.querySelector("#newYork");
  if (newYork) {
    let newYorkDateElement = newYork.querySelector(".date");
    let newYorkTimeElement = newYork.querySelector(".time");
    let newYorkTimezone = "America/New_York";

    newYorkDateElement.innerHTML = moment()
      .tz(newYorkTimezone)
      .format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = moment()
      .tz(newYorkTimezone)
      .format("h:mm:ss [<small>] A[</small>]");
  }
}

function updateSelectedCity(event) {
  if (event.target.value.length > 0) {
  }
}

updateTime();
setInterval(updateTime, 1000);

let selectedCity = document.querySelector("#selectedCity");
selectedCity.addEventListener("change", updateSelectedCity);
