// Mobile Menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// Modal open/close for all 5 projects
function openModal(id) {
    document.getElementById("modal" + id).style.display = "block";
}
function closeModal(id) {
    document.getElementById("modal" + id).style.display = "none";
}
window.onclick = function(event) {
    for (let i = 1; i <= 5; i++) {
        let modal = document.getElementById("modal" + i);
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
};

// Contact Form Submission
function submitForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields.");
        return false;
    }
    alert("Thank you, " + name + "! Your message has been sent.");
    return false; // prevent actual submission
}
