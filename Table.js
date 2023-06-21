document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;
    var gender = document.getElementById("gender").value;
    var city = document.getElementById("city").value;
  
    var studentData = {
      name: name,
      age: age,
      grade: grade,
      gender: gender,
      city: city
    };
      var students = JSON.parse(localStorage.getItem("students"));
    students.push(studentData);
    localStorage.setItem("students", JSON.stringify(students));
      updateTable();
      document.getElementById("studentForm").reset();
  });
    function updateTable() {
    var table = document.getElementById("studentTable");
    table.innerHTML = `
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Grade</th>
        <th>Gender</th>
        <th>City</th>
      </tr>
    `;
    var students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(function(student) {
      var row = table.insertRow(-1);
      Object.values(student).forEach(function(value) {
        var data = row.insertCell();
        data.textContent = value;
      });
    });
  }
    updateTable();