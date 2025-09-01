const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
root.setAttribute('data-theme', initTheme);
updateToggle(initTheme);

function updateToggle(theme) {
  toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
  updateToggle(current);
});

document.getElementById('year').textContent = new Date().getFullYear();
