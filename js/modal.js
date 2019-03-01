// Compose Message Modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

// Reset Password Modal
var passwrdModalBtn = document.getElementById('passwordModalBtn');
var myPasswrdModal = document.getElementById('myPasswordModal');
var span = document.getElementsByClassName("close")[1];
passwrdModalBtn.onclick = function () {
    myPasswrdModal.style.display = "block";
}
span.onclick = function () {
    myPasswrdModal.style.display = "none";
}

// Saved Successfully Password Modal
var savepass = document.getElementById('savePassBtn');
var savePassModal = document.getElementById('savePassModal');
var span = document.getElementsByClassName("close")[2];
savepass.onclick = function () {
    savePassModal.style.display = "block";
}
span.onclick = function () {
    savePassModal.style.display = "none";
}