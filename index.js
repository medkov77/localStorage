const themeBtn = document.querySelector("#slideThree");
const area = document.querySelector("#area");
let theme = localStorage.getItem("theme");
console.log(theme);
if (!theme) {
  localStorage.setItem("theme", "light");
} else if (theme === "dark") {
  themeBtn.removeAttribute("checked");
  setTheme("dark");
} else if (theme === "light") {
  themeBtn.setAttribute("checked", true);
  setTheme("light");
}
function setTheme(color) {
  if (color === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.theme = "light";
  } else if (color === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.theme = "dark";
  }
}
themeBtn.addEventListener("change", (e) => {
  if (e.currentTarget.checked) {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

area.value = localStorage.getItem("area");
area.oninput = () => {
  localStorage.setItem("area", area.value);
};
