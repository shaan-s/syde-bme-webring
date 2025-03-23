function createComponents(sites) {
    const sitebox = document.getElementById("site-box");
    sites.forEach((person, index) => {
        const cnt1 = document.createElement("div");
        cnt1.className = "cell";
        cnt1.textContent = person.name;
        const cnt2 = document.createElement("div");
        cnt2.className = "cell";
        cnt2.textContent = person.cohort;
        const cnt3 = document.createElement("div");
        const link = document.createElement("a");
        cnt3.className = "cell";
        link.textContent = person.website;
        link.href = person.website;
        cnt3.appendChild(link);

        sitebox.appendChild(cnt1);
        sitebox.appendChild(cnt2);
        sitebox.appendChild(cnt3);
        
    });
}

createComponents(siteData.sites);