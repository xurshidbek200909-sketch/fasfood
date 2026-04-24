function scrollMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function order(product) {
  alert(product + " buyurtma qilindi!");
}

function telegram() {
  window.open("https://t.me/yourusername");
}
function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "☀️ Light mode";
  } else {
    btn.innerHTML = "🌙 Dark mode";
  }
}
/* 🛒 SAVATCHA */
let cart = [];
let total = 0;

/* ➕ MAHSULOT QO‘SHISH (test uchun) */
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  updateUI();
}

/* 🔄 UI YANGILASH */
function updateUI() {
  document.getElementById("total").innerText = total;
}

/* 💳 CHECKOUT */
function checkout() {
  if (cart.length === 0) {
    alert("❌ Savatcha bo‘sh!");
    return;
  }

  // buyurtma summary
  let message = "🛒 BUYURTMA:\n\n";

  cart.forEach((item, i) => {
    message += `${i + 1}. ${item.name} - ${item.price} so'm\n`;
  });

  message += `\n💰 Jami: ${total} so'm`;

  alert(message);

  // reset
  cart = [];
  total = 0;
  updateUI();
}
function checkout() {
  fetch("http://localhost:3000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      cart: cart,
      total: total
    })
  })
  .then(() => {
    alert("Buyurtma Telegramga yuborildi 🚀");
  });
}