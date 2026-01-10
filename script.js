//File Created By Mfsavana
//Don't Steal Anything

for (let i = 0; i < 200; i++) {
  const star = document.createElement("div");
  star.className = "star";
  const size = Math.random() * 2 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * -window.innerHeight + "px";
  const duration = Math.random() * 10 + 5;
  star.style.animationDuration = `2s, ${duration}s`;
  document.body.appendChild(star);
}

function openPopup(id) {
  document.getElementById(id).style.display = "block";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

const toast = document.getElementById("toast");
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      showToast("✔ Nomor berhasil disalin");
    })
    .catch(() => {
      showToast("✖ Gagal menyalin teks");
    });
}

function orderPanel(panel, harga) {
  const text = `Halo Wanz, saya ingin membeli Panel Pterodactyl dengan spesifikasi ${panel} dengan harga ${harga}`;
  const url = `https://wa.me/6281460365472?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function orderVPS(type, harga) {
  const text = `Halo Wanz, saya ingin membeli Vps ${type} dengan harga ${harga}`;
  const url = `https://wa.me/6281460365472?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function orderMember(type, harga) {
  const text = `Halo Wanz, saya ingin membeli Membership Panel yang ${type} dengan harga ${harga}`;
  const url = `https://wa.me/6281460365472?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
