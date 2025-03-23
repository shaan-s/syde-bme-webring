function formatUrl(url) {
    return url.replace(/(^\w+:|^)\/\//, '').replace(/^www\./, "");
}

function createComponents(sites,selected,search) {
    var curr_class;
    const sitebox = document.getElementById("site-box");
    sitebox.innerHTML = "";
    
    const head1 = document.createElement("div");
    head1.textContent = "NAME";
    const head2 = document.createElement("div");
    head2.textContent = "YEAR";
    const head3 = document.createElement("div");
    head3.textContent = "WEBSITE";
    head1.className = "head-cell cell";
    head2.className = "head-cell cell";
    head3.className = "head-cell cell";
    sitebox.appendChild(head1);
    sitebox.appendChild(head2);
    sitebox.appendChild(head3);

    sites.forEach((person, index) => {
        curr_class = "cell unlight";
        let search_l = search.toLowerCase();

        if (person.program == selected) {
            curr_class = "cell";
        }
        
        if (selected == "") {
            if ((person.name.toLowerCase()).includes(search_l) || (person.year).includes(search_l)) {
                curr_class = "cell";
        }}

        const cnt1 = document.createElement("div");
        cnt1.className = curr_class;
        cnt1.textContent = person.name;
        const cnt2 = document.createElement("div");
        cnt2.className = curr_class;
        cnt2.textContent = person.year;
        const cnt3 = document.createElement("div");
        const link = document.createElement("a");
        cnt3.className = curr_class;
        link.textContent = formatUrl(person.website);
        link.href = person.website;
        cnt3.appendChild(link);

        sitebox.appendChild(cnt1);
        sitebox.appendChild(cnt2);
        sitebox.appendChild(cnt3);
        
    });
}

createComponents(siteData.sites,"","")

document.getElementById("BME").addEventListener("click", function() {
    createComponents(siteData.sites,"BME","")
  });

document.getElementById("SYDE").addEventListener("click", function() {
    createComponents(siteData.sites,"SYDE","")
});

document.getElementById("searchbar").addEventListener("keyup", function() {
    createComponents(siteData.sites,"",document.getElementById("searchbar").value);
});