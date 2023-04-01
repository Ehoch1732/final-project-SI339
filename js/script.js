function showNav() {
    // Locate the navigation list
    let navList = document.getElementById("navlist");
    // If the navigation is displayed, hide it & vice versa.
    if (navList.style.display === "block") {
        navList.style.display = "none";
    }
    else {
        navList.style.display = "block";
    }
}; // showNav()

// Target viewports at 640px width & larger
const tabletQuery = window.matchMedia("(min-width: 640px)");

tabletQuery.onchange = (e) => {
    console.log("tablet")
    if (e.matches) {
        // Display navigation links.
        let nav = document.getElementById("navlist");
        nav.style.display = "block";
    }
}

// Target mobile viewports at widths below 640px
const mobileQuery = window.matchMedia("(max-width: 640px)");

mobileQuery.onchange = (e) => {
    console.log("mobile")
    if (e.matches) {
        // Display navigation links.
        let nav = document.getElementById("navlist");
        nav.style.display = "none";
    }
}
