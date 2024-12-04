import Navbar from "./components/Navbar.js";
import Myip from "./components/myip.js";

document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("root");

  // Render Navbar
  root.innerHTML = Navbar();

  // Tambah konten utama
  const content = document.createElement("div");
  content.innerHTML = `
    <h1>what's my ip</h1>
  `;
  root.appendChild(content);

  // Render myip (tunggu async selesai)
  const myip = document.createElement("div");
  myip.innerHTML = await Myip();
  root.appendChild(myip);
});