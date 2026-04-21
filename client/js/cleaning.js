function addComplaint() {
  const description = document.getElementById("complaint").value;

  fetch("http://localhost:5000/api/cleaning", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ description })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}

function getComplaints() {
  fetch("http://localhost:5000/api/cleaning")
    .then(res => res.json())
    .then(data => {
      document.getElementById("complaintList").innerHTML =
        data.map(c => `<p>${c.description}</p>`).join("");
    });
}