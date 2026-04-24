function scrollMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function order(product) {
  const name = prompt("Ismingizni kiriting:");
  alert(name + " -> " + product + " buyurtma qildi ✅");
}

function telegram() {
  window.open("https://t.me/yourusername");
}

/* DARK MODE */
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));