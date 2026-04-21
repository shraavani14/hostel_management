function addFood() {
  const item = document.getElementById("foodItem").value;

  fetch("http://localhost:5000/api/food", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ item })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}

function getFood() {
  fetch("http://localhost:5000/api/food")
    .then(res => res.json())
    .then(data => {
      document.getElementById("foodList").innerHTML =
        data.map(f => `<p>${f.item}</p>`).join("");
    });
}