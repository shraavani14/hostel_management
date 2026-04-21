function addSport() {
  const sport_name = document.getElementById("sportName").value;

  fetch("http://localhost:5000/api/sports", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ sport_name })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}

function getSports() {
  fetch("http://localhost:5000/api/sports")
    .then(res => res.json())
    .then(data => {
      document.getElementById("sportsList").innerHTML =
        data.map(s => `<p>${s.sport_name}</p>`).join("");
    });
}