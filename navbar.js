// File: navbar.js

document.addEventListener("DOMContentLoaded", () => {
  // Tentukan jalur navbar.html
  const navbarPath = location.pathname.includes("pages")
    ? "navbar.html"
    : "navbar.html";

  // Memuat konten navbar
  fetch(navbarPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("navbar").innerHTML = html;
    })
    .catch((error) => console.error("Gagal memuat navbar:", error));
});

document.title = "PSP Nexus";

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = "/images/title2.png"; // Ganti dengan path logo Anda
document.head.appendChild(favicon);

