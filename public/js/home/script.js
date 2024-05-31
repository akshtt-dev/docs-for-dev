// LIGHT MODE AND DARK MODE TOGGLE
const darkMode = document.getElementById('darkMode');
const lightMode = document.getElementById('lightMode');

lightMode.addEventListener('click', () => {
    lightMode.style.display = 'none';
    darkMode.style.display = 'block';
});

darkMode.addEventListener('click', () => {
    lightMode.style.display = 'block';
    darkMode.style.display = 'none';
});