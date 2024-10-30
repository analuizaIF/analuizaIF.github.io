const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function updateIcon(theme) {
  if (theme === "dark") {
    toggleTheme.classList.add("bi-moon-fill");
    toggleTheme.classList.remove("bi bi-brightness-high-fill");
  } else {
    toggleTheme.classList.add("bi-brightness-high-fill");
    toggleTheme.classList.remove("bi-moon-fill");
  }
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle("active");
  });
});

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Salva o tema selecionado no localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  rootHtml.setAttribute("data-theme", savedTheme);
  updateIcon(savedTheme);
}


function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  rootHtml.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); 
  updateIcon(newTheme);
}

loadTheme();