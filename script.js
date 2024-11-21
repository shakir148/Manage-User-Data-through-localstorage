const form = document.getElementById('userForm');

    const userTable = document.getElementById('userTable').querySelector('tbody');
    let users = JSON.parse(localStorage.getItem('users')) || [];

    function renderTable() {
      userTable.innerHTML = '';
      users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.fname}</td>
          <td>${user.lname}</td>
          <td>
            <button onclick="editUser(${index})">Edit</button>
            <button onclick="deleteUser(${index})">Delete</button>
          </td>
        `;
        userTable.appendChild(row);
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fname = document.getElementById('fname').value;
      const lname = document.getElementById('lname').value;
      users.push({ fname, lname });
      localStorage.setItem('users', JSON.stringify(users));
      form.reset();
      renderTable();
    });

   
    function editUser(index) {
      const user = users[index];
      document.getElementById('fname').value = user.fname;
      document.getElementById('lname').value = user.lname;
     
      users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(users));
      renderTable();
    }

   
    function deleteUser(index) {
      users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(users));
      renderTable();
    }

   
    renderTable();