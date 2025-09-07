/* Script.js */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded ✅");

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            btn.style.transform = "scale(0.95)";
            setTimeout(() => btn.style.transform = "scale(1)", 150);
            alert(`Kamu klik tombol: ${btn.textContent}`);
        });
    });
});