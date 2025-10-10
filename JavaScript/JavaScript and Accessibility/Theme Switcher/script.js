const themes = [
  {
    name: "light", 
    message: "Hello sunshine — Light theme is on!"
  },
  {
    name: "dark", 
    message: "The night is yours — Dark theme is on!"
  }
];

const themeStatus = document.getElementById("theme-status");
const lightTheme = document.getElementById("theme-light");
const darkTheme = document.getElementById("theme-dark");
const themeButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");

themeButton.addEventListener("click", () => {
  const isHidden = themeDropdown.hasAttribute("hidden");

  if (isHidden) {
    themeDropdown.removeAttribute("hidden");
    themeButton.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.setAttribute("hidden", "");
    themeButton.setAttribute("aria-expanded", "false");
  }
});

lightTheme.addEventListener("click", () => {
  document.body.className = "theme-light"; 
  themeStatus.textContent = themes[0].message;

  themeDropdown.setAttribute("hidden", "");
  themeButton.setAttribute("aria-expanded", "false");
});

darkTheme.addEventListener("click", () => {
  document.body.className = "theme-dark"; 
  themeStatus.textContent = themes[1].message;

  themeDropdown.setAttribute("hidden", "");
  themeButton.setAttribute("aria-expanded", "false");
});
