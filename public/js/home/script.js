// LIGHT MODE AND DARK MODE TOGGLE
const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");
const mode = document.getElementById("mode");

mode.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    lightMode.style.display = "none";
    darkMode.style.display = "block";
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    lightMode.style.display = "block";
    darkMode.style.display = "none";
  }
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  lightMode.style.display = "none";
  darkMode.style.display = "block";
} else {
  document.body.classList.remove("dark-theme");
  lightMode.style.display = "block";
  darkMode.style.display = "none";
}
