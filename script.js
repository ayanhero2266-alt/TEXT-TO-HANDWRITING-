<button onclick="location.href='add-student.html'">Add Student</button>
// Add Student Function
function addStudent() {

    let student = {
        name: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        class: document.getElementById("class").value,
        section: document.getElementById("section").value,
        adm: document.getElementById("adm").value,
        contact: document.getElementById("contact").value
    };

    let face = document.getElementById("face").files[0];

    if (!student.name || !student.roll || !student.adm || !face) {
        alert("Please fill all fields and upload face image.");
        return;
    }

    // Save student object
    localStorage.setItem(student.adm, JSON.stringify(student));

    // Save face image file name
    localStorage.setItem(student.adm + "_face", face.name);

    // Success message
    document.getElementById("msg").style.display = "block";

    setTimeout(() => {
        document.getElementById("msg").style.display = "none";
    }, 2000);

    // Clear fields
    document.getElementById("name").value = "";
