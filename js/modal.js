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

// Create Group Modal
var newGroupBtn = document.getElementById('newgroupbtn');
var createGroup = document.getElementById('creategroup');
var span = document.getElementsByClassName("close")[3];
newGroupBtn.onclick = function () {
    createGroup.style.display = "block";
}
span.onclick = function () {
    createGroup.style.display = "none";
}

// Add User to Group Modal
var addUserBtn = document.getElementById('adduserbtn');
var addUser = document.getElementById('adduser');
var span = document.getElementsByClassName("close")[4];
addUserBtn.onclick = function () {
    addUser.style.display = "block";
}
span.onclick = function () {
    addUser.style.display = "none";
}

// Group Created Successfully
var groupSuccessBtn = document.getElementById('groupsuccessbtn');
var groupSuccessModal = document.getElementById('groupsuccessmodal');
var span = document.getElementsByClassName("close")[5];
groupSuccessBtn.onclick = function () {
    groupSuccessModal.style.display = "block";
}
span.onclick = function () {
    groupSuccessModal.style.display = "none";
}

// User Added Successfully
var userSuccessBtn = document.getElementById('usersuccessbtn');
var userSuccessModal = document.getElementById('usersuccessmodal');
var span = document.getElementsByClassName("close")[6];
userSuccessBtn.onclick = function () {
    userSuccessModal.style.display = "block";
}
span.onclick = function () {
    userSuccessModal.style.display = "none";
}