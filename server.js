const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(require("cors")());

const TOKEN = "8136698210:AAEV621v8_dB9XmnDojl0K8bDEVfcAa7nIY";
const CHAT_ID = "6749130848";

// 🛒 BUYURTMA QABUL QILISH
app.post("/order", async (req, res) => {
  const { cart, total } = req.body;

  let message = "🛒 Yangi buyurtma!\n\n";

  cart.forEach((item, i) => {
    message += `${i+1}. ${item.name} - ${item.price} so'm\n`;
  });

  message += `\n💰 Jami: ${total} so'm`;

  // Telegramga yuborish
  await axios.get(
    `https://api.telegram.org/bot${TOKEN}/sendMessage`,
    {
      params: {
        chat_id: CHAT_ID,
        text: message
      }
    }
  );

  res.json({ success: true });
});

app.listen(3000, () => console.log("Server ishlayapti"));