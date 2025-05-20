// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Show/Hide Password
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "Show" : "Hide";
});
