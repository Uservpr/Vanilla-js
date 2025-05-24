import Navbar from "./components/Navbar.js";
import Myip from "./components/myip.js";

document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("root");

  // Navbar
  root.innerHTML = Navbar();

  // Loading
  const loading = document.createElement("div");
  loading.className = "container text-center my-5";
  loading.innerHTML = `<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>`;
  root.appendChild(loading);

  // Fetch & Render IP Info
  const myipHTML = await Myip();
  loading.outerHTML = myipHTML;

  // Footer
  const footer = document.createElement("footer");
  footer.className = "text-center text-muted my-4";
  footer.innerHTML = `Made with my-ip.io by Dany dev`;
  document.body.appendChild(footer);
});