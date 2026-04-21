function allocateRoom() {
  console.log("Button clicked");

  const student_id = document.getElementById("studentId").value;
  const room_id = document.getElementById("roomId").value;

  fetch("http://localhost:5000/api/rooms/allocate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ student_id, room_id })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
    })
    .catch(err => console.error(err));
}

function getRooms() {
  fetch("http://localhost:5000/api/rooms")
    .then(res => res.json())
    .then(data => {
      const roomList = document.getElementById("roomList");

      roomList.innerHTML = "<h3>Rooms:</h3>";

      data.forEach(room => {
        roomList.innerHTML += `
          <p>
            Room ID: ${room.room_id} | 
            Capacity: ${room.capacity} | 
            Status: ${room.status}
          </p>
        `;
      });
    })
    .catch(err => console.error(err));
}