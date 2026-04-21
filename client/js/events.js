function addEvent() {
  const name = document.getElementById("eventName").value;
  const date = document.getElementById("eventDate").value;

  fetch("http://localhost:5000/api/events", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, date })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}

function getEvents() {
  fetch("http://localhost:5000/api/events")
    .then(res => res.json())
    .then(data => {
      document.getElementById("eventList").innerHTML =
        data.map(e => `<p>${e.name} - ${e.date}</p>`).join("");
    });
}