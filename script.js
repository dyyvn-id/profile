document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    card.style.opacity = "0";

    setTimeout(() => {
        card.style.transition = "all 1s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);

    document.querySelectorAll(".button a").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.boxShadow = "0 0 20px #4da3ff";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.boxShadow = "none";
        });
    });
});
