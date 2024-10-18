function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("currentYear");
    yearElement.textContent = new Date().getFullYear();
});
