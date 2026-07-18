const typing = document.getElementById("typing");

const jobs = [
    "Digital Creator",
    "Future Entrepreneur",
    "Web Developer",
    "Motorcycle Enthusiast"
];

let jobIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = jobs[jobIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            jobIndex++;

            if (jobIndex >= jobs.length) {
                jobIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

const quotes = [
    "Masa depan dibangun oleh keberanian untuk memulai, bukan oleh ketakutan untuk mencoba.",
    "Kesuksesan dimulai dari satu langkah kecil.",
    "Terus belajar. Terus berkembang.",
    "Jangan takut gagal. Takutlah jika berhenti mencoba.",
    "Disiplin hari ini, sukses esok hari."
];

let quoteIndex = 0;
const quote = document.getElementById("quote");

function changeQuote() {

    quote.style.opacity = 0;

    setTimeout(() => {

        quote.innerHTML = quotes[quoteIndex];

        quote.style.opacity = 1;

        quoteIndex++;

        if (quoteIndex >= quotes.length) {
            quoteIndex = 0;
        }

    }, 300);

}

changeQuote();

setInterval(changeQuote, 5000);

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate([
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ], {
                duration: 800,
                fill: "forwards"
            });

        }

    });

});

sections.forEach(section => observer.observe(section));
