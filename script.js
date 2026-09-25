const header = document.querySelector(".siteHeader");
const menuButton = document.querySelector(".menuButton");
const navigation = document.querySelector(".navbar");
const navLinks = [...document.querySelectorAll(".navlink")];
const sections = [...document.querySelectorAll(".pageSection")];
const year = document.querySelector("#currentYear");

year.textContent = new Date().getFullYear();

const closeMenu = () => {
    navigation.classList.remove("isOpen");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
};

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("isOpen");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu",
    );
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("isActive"));
        link.classList.add("isActive");
        closeMenu();
    });
});

const updateActiveSection = () => {
    const currentSection = sections.reduce((activeSection, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - 110);
        return distance < activeSection.distance
            ? { section, distance }
            : activeSection;
    }, { section: sections[0], distance: Number.POSITIVE_INFINITY });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "isActive",
            link.dataset.section === currentSection.section.id,
        );
    });

    header.classList.toggle("isScrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateActiveSection, { passive: true });
document.addEventListener("click", (event) => {
    if (
        navigation.classList.contains("isOpen") &&
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        closeMenu();
    }
});

updateActiveSection();
const goTopButton = document.querySelector(".goTopButton");

const updateGoTopButton = () => {
    goTopButton.classList.toggle("isVisible", window.scrollY > 420);
};

goTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateGoTopButton, { passive: true });
updateGoTopButton();