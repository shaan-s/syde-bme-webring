import { formatUrl, webringMatch } from "./script.js";

// navigates the webring using the arrows on personal websites
let navigateWebring = () => {
    // either https://sydeb.me/#your-site-here?nav=next or nav=prev
    const fragment = window.location.hash.slice(1);
    
    if (!fragment.includes("?")) return;
    const [currentSite, query] = fragment.split("?");
    const params = new URLSearchParams(query);
    const nav = params.get("nav");
    if (!nav || !["next", "prev"].includes(nav)) return;

    const match = siteData.sites.filter((site) =>
      webringMatch(currentSite, site.website)
    );
    if (match.length === 0) return;
    if (match.length > 1) {
      throw new Error(
        `Cannot calculate navigation state because mutiple URLs matched ${currentSite}`
      );
    }
  
    const currIndex = siteData.sites.findIndex((site) =>
      webringMatch(currentSite, site.website)
    );
    const increment = nav === "next" ? 1 : -1;
    let newIndex = (currIndex + increment) % webringData.sites.length;
    if (newIndex < 0) newIndex = webringData.sites.length - 1;
    if (!webringData.sites[newIndex]) return;
  
    document.body.innerHTML = `
    <main class="p-6 min-h-[100vh] w-[100vw] text-black-900">
      <p class="font-latinMonoCondOblique">redirecting...</p>
    </main>
    `;
    window.location.href = webringData.sites[newIndex].website;
};
