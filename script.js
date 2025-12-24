const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
    header.classList.add("scrolled");
    } else {
    header.classList.remove("scrolled");
    }
});

document.querySelectorAll(".project-card").forEach(card => {
    const slider = card.querySelector(".slider");
    const after = card.querySelector(".after-wrapper");

    slider.addEventListener("input", e => {
        after.style.width = `${100 - e.target.value}%`;
    });
});

const ctaButtons = document.querySelectorAll(".ctaButton");
ctaButtons.forEach((button) => button.addEventListener("click", () => dialog.showModal()));

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click",() => {
    dialog.close();
})

const dialog = document.querySelector("dialog");
dialog.addEventListener("close", () => {
    dialogForm.reset();
});

const dialogForm = document.querySelector("#dialogForm");
dialogForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // buradaki kod formu iletecek

    dialog.close();
});

const mainForm = document.querySelector("#mainForm");
mainForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // buradaki kod formu iletecek

    mainForm.reset();
});