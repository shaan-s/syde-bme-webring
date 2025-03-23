function createComponents(sites,selected) {
    console.log("t");
    var curr_class;
    const sitebox = document.getElementById("site-box");
    sitebox.innerHTML = "";
    sites.forEach((person, index) => {
        if (person.program == selected || selected == "") {
            curr_class = "cell";
        }
        else {curr_class = "cell unlight";}
        
        const cnt1 = document.createElement("div");
        cnt1.className = curr_class;
        cnt1.textContent = person.name;
        const cnt2 = document.createElement("div");
        cnt2.className = curr_class;
        cnt2.textContent = person.year;
        const cnt3 = document.createElement("div");
        const link = document.createElement("a");
        cnt3.className = curr_class;
        link.textContent = person.website;
        link.href = person.website;
        cnt3.appendChild(link);

        sitebox.appendChild(cnt1);
        sitebox.appendChild(cnt2);
        sitebox.appendChild(cnt3);
        
    });
}

createComponents(siteData.sites,"")

document.getElementById("BME").addEventListener("click", function() {
    createComponents(siteData.sites,"BME")
  });

document.getElementById("SYDE").addEventListener("click", function() {
    createComponents(siteData.sites,"SYDE")
});

document.getElementById("SYDE").addEventListener("click", function() {
    createComponents(siteData.sites,"SYDE")
});