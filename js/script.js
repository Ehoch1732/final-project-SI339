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

function currentPage() {
    let currFile = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    if (currFile === "index.html") {
        let currPageInNav = document.getElementById("index");
        currPageInNav.classList.add("current_page");
        // Make sure other two pages do not have current_page class.
        document.getElementById("trips").classList.remove("current_page");
        document.getElementById("favorite").classList.remove("current_page");
    }
    if (currFile === "trips.html") {
        let currPageInNav = document.getElementById("trips");
        currPageInNav.classList.add("current_page");
        // Make sure other two pages do not have current_page class.
        document.getElementById("index").classList.remove("current_page");
        document.getElementById("favorite").classList.remove("current_page");
    }
    if (currFile === "favorite.html") {
        let currPageInNav = document.getElementById("favorite");
        currPageInNav.classList.add("current_page");
        // Make sure other two pages do not have current_page class.
        document.getElementById("trips").classList.remove("current_page");
        document.getElementById("index").classList.remove("current_page");
    }


}

window.addEventListener("load", currentPage);