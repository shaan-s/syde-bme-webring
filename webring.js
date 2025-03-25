// handling webring links on personal websites
const webring = [ // add in "https://(site)/" format since window.location.href specifically detects that
    "https://about.ceruleanechoes.com/",
    "https://www.ahyankabir.me/",
    "https://www.brandonling.me/",
];

// setting the links based on the personal website location in list
function setWebringLinks() {
    const currentSite = window.location.href;
    const index = webring.indexOf(currentSite);

    if (index === -1) return; // exit if site is not in the webring

    const prevSite = webring[(index - 1 + webring.length) % webring.length]; // wraparound
    const nextSite = webring[(index + 1) % webring.length]; // wraparound

    document.getElementById("prev").href = prevSite; // if left arrow clicked
    document.getElementById("next").href = nextSite; // if right arrow clicked
}

// run when script loads
setWebringLinks();