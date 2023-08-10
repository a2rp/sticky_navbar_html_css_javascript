window.onload = () => {
    // load navbar link page
    document.querySelectorAll(".navlink").forEach(link => {
        link.addEventListener("click", (event) => {
            const className = event.currentTarget.className.split(" ")[1];
            document.querySelector(".contentContainer").innerText = className.toUpperCase() + " PAGE";
        });
    });

    // sticky calculation
    const navbar = document.querySelector(".navbar");
    const sticky = navbar.offsetTop;
    console.log(sticky);
    window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
            navbar.style.cssText = `
                position: fixed;
                top: 0;
            `;
        } else {
            navbar.style.cssText = `
                position: absolute;
                top: ${sticky}px;
            `;
        }
    };
};

