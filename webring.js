const webring = [
    "https://about.ceruleanechoes.com/",
    "http://www.ahyankabir.me/",
    "https://www.brandonling.me/",
];


function setWebringLinks() {
    const currentSite = window.location.href;
    const index = webring.indexOf(currentSite);

    if (index === -1) return; // Exit if site is not in the webring

    const prevSite = webring[(index - 1 + webring.length) % webring.length]; // Wrap-around
    const nextSite = webring[(index + 1) % webring.length]; // Wrap-around

    document.getElementById("prev").href = prevSite;
    document.getElementById("next").href = nextSite;
}

// Run when script loads
setWebringLinks();