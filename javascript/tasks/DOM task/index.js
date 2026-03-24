const users = [
  { id: 1, name: "Anand", role: "Admin", active: true },
  { id: 2, name: "Riya", role: "Editor", active: false },
  { id: 3, name: "Karan", role: "Viewer", active: true },
  { id: 4, name: "Meera", role: "Editor", active: true }
];

// users.sort()

  let activeCount = 0;
  let inactiveCount = 0;
  
  const tableBody = document.getElementById("tabledata");
  users.forEach(user => {
    const tr = document.createElement("tr");

    if (user.active) {
      activeCount++;
    } else {
      inactiveCount++;
    }


    const tdId = document.createElement("td");
    tdId.textContent = user.id;

    const tdName = document.createElement("td");
    tdName.textContent = user.name;

    const tdRole = document.createElement("td");
    tdRole.textContent = user.role;

    const tdActive = document.createElement("td");
    tdActive.textContent = user.active ? "Yes" : "No";

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdRole);
    tr.appendChild(tdActive);
  
    tableBody.appendChild(tr);
  });



