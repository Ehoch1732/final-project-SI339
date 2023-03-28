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