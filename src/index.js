function updateTime() {
  let sydney = document.querySelector("#sydney");
  if (sydney) {
    let sydneyDateElement = sydney.querySelector(".date");
    let sydneyTimeElement = sydney.querySelector(".time");
    let sydneyTimezone = "Australia/Sydney";

    sydneyDateElement.innerHTML = moment()
      .tz(sydneyTimezone)
      .format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = moment()
      .tz(sydneyTimezone)
      .format("h:mm:ss [<small>] A[</small>]");
  }

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

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTz = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#citySelected");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTz.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTz.format("h:mm:ss")}<small> ${cityTz.format(
    "A"
  )}</small></div>
        </div>
`;
  setTimeout(() => {
    updateCity(event);
    updateTime();
  }, 1000);

  if (cityTimezone === "refresh") {
    window.location.reload();
  }
}

updateTime();
setInterval(updateTime, 1000);

let selectedCity = document.querySelector("#city");
selectedCity.addEventListener("change", updateCity);
